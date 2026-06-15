import React, { useState, useEffect, useRef } from 'react';

/**
 * Componente: MatchEngine (Versão V12 Oficial)
 * Simulador minuto a minuto com suporte a Sinergias, Stamina, Setas de Moral ISS e UI Editorial Expandida.
 */
export default function MatchEngine({
  timeUtilizador,       // { nome: 'Meu Time', elenco: [...] } -> elenco com as props (moral, energia, etc.)
  timeAdversario,       // { nome: 'AJAX 1995', elenco: [...] }
  onFinalizarPartida,   // Retorna o resultado e as atualizações de moral/energia dos jogadores
  velocidadeInicial = 2 // 1x, 2x, 3x
}) {
  const [minuto, setMinuto] = useState(0);
  const [placarU, setPlacarU] = useState(0);
  const [placarA, setPlacarA] = useState(0);
  const [eventos, setEventos] = useState([]);
  const [emAndamento, setEmAndamento] = useState(false);
  const [velocidade, setVelocidade] = useState(velocidadeInicial);
  const [mvpCandidatos, setMvpCandidatos] = useState({}); // Registar pontos para eleger o MVP

  const intervalRef = useRef(null);
  const cronicaEndRef = useRef(null);

  // Auto-scroll da caixa de narração expandida de 8-10 linhas
  useEffect(() => {
    if (cronicaEndRef.current) {
      cronicaEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [eventos]);

  // Velocidades em milissegundos por minuto de simulação
  const getTempoVelocidade = () => {
    if (velocidade === 3) return 50;  // Ultra rápida
    if (velocidade === 2) return 150; // Rápida equilibrada
    return 400;                       // 1x (Transmissão Cadenciada)
  };

  // --- ENGINE CORE: CÁLCULO DE PODER COM SINERGIAS, MORAL E STAMINA ---
  const calcularForcaEquipa = (elenco, isUtilizador = false) => {
    let somaOvr = 0;
    const titulares = elenco.filter(j => j.titular || isUtilizador); // se adversário não tiver flag, assume todos

    // Se for o utilizador, extrair nomes para validar Sinergias de Duplas Dinâmicas
    const nomesValidos = isUtilizador ? titulares.map(j => j.nome.toUpperCase()) : [];
    const duplasTriggers = ['ROMÁRIO', 'BEBETO', 'RONALDO', 'RIVALDO', 'XAVI', 'INIESTA', 'MALDINI', 'NESTA'];

    titulares.forEach(jogador => {
      let ovrCalculado = jogador.ovr || 80;

      // 1. Aplicação do Bónus da Seta de Moral (ISS)
      if (jogador.moral === 'alta') ovrCalculado += 3;
      if (jogador.moral === 'baixa') ovrCalculado -= 4;

      // 2. Aplicação de Sinergia de Duplas Dinâmicas (+3 OVR)
      if (isUtilizador) {
        const temParceria = duplasTriggers.some(t => 
          jogador.nome.toUpperCase().includes(t) && 
          nomesValidos.some(n => n.includes(t) && n !== jogador.nome.toUpperCase())
        );
        if (temParceria) ovrCalculado += 3;
      }

      // 3. Penalização Crítica por Falta de Energia/Stamina
      const energiaFator = (jogador.energia || 100) / 100;
      if (energiaFator < 0.5) {
        ovrCalculado *= 0.85; // Perda de 15% de rendimento se estiver exausto
      } else if (energiaFator < 0.75) {
        ovrCalculado *= 0.95;
      }

      somaOvr += ovrCalculado;
    });

    return somaOvr / (titulares.length || 1);
  };

  // Iniciar ou pausar a transmissão do jogo
  const togglePartida = () => {
    if (emAndamento) {
      clearInterval(intervalRef.current);
      setEmAndamento(false);
    } else {
      setEmAndamento(true);
    }
  };

  // Loop de simulação minuto a minuto
  useEffect(() => {
    if (!emAndamento) return;

    intervalRef.current = setInterval(() => {
      setMinuto(prev => {
        if (prev >= 90) {
          clearInterval(intervalRef.current);
          setEmAndamento(false);
          finalizarJogo();
          return 90;
        }
        
        const proximoMinuto = prev + 1;
        processarMinuto(proximoMinuto);
        return proximoMinuto;
      });
    }, getTempoVelocidade());

    return () => clearInterval(intervalRef.current);
  }, [emAndamento, velocidade, placarU, placarA, mvpCandidatos]);

  // Processamento de probabilidades a cada minuto do cronómetro
  const processarMinuto = (m) => {
    const forcaU = calcularForcaEquipa(timeUtilizador.elenco, true);
    const forcaA = calcularForcaEquipa(timeAdversario.elenco, false);

    // Eventos aleatórios baseados no diferencial de forças dos esquadrões
    const chanceAtaqueU = 0.04 + (forcaU - forcaA) * 0.003;
    const chanceAtaqueA = 0.04 + (forcaA - forcaU) * 0.003;

    const rand = Math.random();

    if (rand < chanceAtaqueU) {
      // Chance de golo do Utilizador
      if (Math.random() > 0.45) {
        const titularesU = timeUtilizador.elenco.filter(j => j.titular);
        // Filtro de peso por posição para goleadores (ST/ATK com mais chances)
        const goliador = titularesU[Math.floor(Math.random() * titularesU.length)];
        
        setPlacarU(p => p + 1);
        setEventos(prev => [...prev, { min: m, tipo: 'GOLO', texto: `[GOLO] ${timeUtilizador.nome.toUpperCase()}! Balanço perfeito na área e ${goliador.nome.toUpperCase()} fuzila para as redes!` }]);
        
        // Registar pontos para MVP (Golo = 4pts)
        setMvpCandidatos(prev => ({ ...prev, [goliador.id]: (prev[goliador.id] || 0) + 4 }));
      } else {
        setEventos(prev => [...prev, { min: m, tipo: 'LANCE', texto: `⚡ Oportunidade para o ${timeUtilizador.nome.toUpperCase()}, mas a defensiva adversária afasta o perigo.` }]);
      }
    } else if (rand < chanceAtaqueU + chanceAtaqueA) {
      // Chance de golo do Adversário
      if (Math.random() > 0.50) {
        setPlacarA(p => p + 1);
        setEventos(prev => [...prev, { min: m, tipo: 'GOLO', texto: `[GOLO] ${timeAdversario.nome.toUpperCase()}! Transição rápida apanha a nossa defesa descompensada e eles marcam.` }]);
      } else {
        setEventos(prev => [...prev, { min: m, tipo: 'LANCE', texto: `🛡️ Pressão do ${timeAdversario.nome.toUpperCase()}! Valeu o posicionamento tático para cortar o cruzamento.` }]);
      }
    }

    // Evento raro: Cartão Amarelo aleatório para o utilizador (Disciplina)
    if (Math.random() < 0.015) {
      const titularesU = timeUtilizador.elenco.filter(j => j.titular);
      const penalizado = titularesU[Math.floor(Math.random() * titularesU.length)];
      setEventos(prev => [...prev, { min: m, tipo: 'CARTAO', texto: `[CARTÃO AMARELO] Entrada tardia de ${penalizado.nome.toUpperCase()} a travar o contra-ataque.` }]);
      setMvpCandidatos(prev => ({ ...prev, [penalizado.id]: (prev[penalizado.id] || 0) - 2 })); // Perde pontos no MVP
    }
  };

  // Processamento do Apito Final e Distribuição de Moral/Física V12
  const finalizarJogo = () => {
    const titularesU = timeUtilizador.elenco.filter(j => j.titular);
    
    // Eleger o MVP da partida com base nos pontos acumulados (ou maior rating se ninguém pontuou)
    let mvpId = titularesU[0]?.id;
    let maxPts = -999;
    
    titularesU.forEach(j => {
      const pts = (mvpCandidatos[j.id] || 0) + (j.ovr * 0.05);
      if (pts > maxPts) {
        maxPts = pts;
        mvpId = j.id;
      }
    });

    const jogadorMvp = titularesU.find(j => j.id === mvpId);

    // Gerar mapa de atualizações do elenco para a próxima jornada
    const elencoAtualizado = timeUtilizador.elenco.map(j => {
      let novaMoral = j.moral || 'normal';
      let novaEnergia = j.energia || 100;

      if (j.titular) {
        // Redução normal de stamina por jogar os 90 minutos
        novaEnergia = Math.max(15, novaEnergia - Math.floor(Math.random() * 12 + 18)); // Perde entre 18% e 30%
        
        // Se foi o MVP ou marcou golo (pontuou no sistema), ganha moral (Seta ⬆️)
        if (j.id === mvpId || (mvpCandidatos[j.id] && mvpCandidatos[j.id] >= 4)) {
          novaMoral = 'alta';
        }
      } else {
        // Reservas descansam e recuperam energia no vestiário
        novaEnergia = Math.min(100, novaEnergia + 25);
      }

      return { ...j, moral: novaMoral, energia: novaEnergia };
    });

    setEventos(prev => [...prev, { min: 90, tipo: 'FIM', texto: `[APITO FINAL] Fim dos 90 minutos regulamentares de futebol analógico. MVP Nomeado: ${jogadorMvp?.nome?.toUpperCase() || 'NENHUM'}.` }]);

    // Callback para o componente pai salvar a memória da campanha
    if (onFinalizarPartida) {
      setTimeout(() => {
        onFinalizarPartida({
          placarU,
          placarA,
          mvp: jogadorMvp,
          elencoAtualizado
        });
      }, 2500);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 font-sans text-[#1A1A1A]">
      
      {/* GRID DO MODO REVISTA EDITORIAL DA V12: 3 COLUNAS EM DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* COLUNA ESQUERDA: PLACAR FIXO DE TV RETRÔ E CONTROLES */}
        <div className="bg-white border-4 border-[#1A1A1A] p-4 shadow-[4px_4px_0px_0px_#1A1A1A] flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-red-600">Transmissão Ao Vivo</span>
          
          {/* Painel do Placar Compactado para evitar Scroll */}
          <div className="bg-[#1A1A1A] text-[#F4F1EA] p-3 text-center font-mono border-2 border-black">
            <div className="text-[11px] text-zinc-400 uppercase font-bold tracking-tight">Copa Nostalgia</div>
            <div className="flex justify-between items-center mt-2 px-2">
              <span className="text-sm font-black truncate max-w-[80px]">{timeUtilizador.nome.replace(/\s\d{4}$/, '')}</span>
              <span className="text-2xl font-black bg-zinc-800 px-3 py-0.5 text-amber-400 shadow-inner">{placarU}</span>
              <span className="text-xs text-zinc-500 font-bold mx-1">X</span>
              <span className="text-2xl font-black bg-zinc-800 px-3 py-0.5 text-amber-400 shadow-inner">{placarA}</span>
              <span className="text-sm font-black truncate max-w-[80px]">{timeAdversario.nome.replace(/\s\d{4}$/, '')}</span>
            </div>
            <div className="text-xl font-black tracking-tighter text-red-500 mt-2 border-t border-zinc-800 pt-1">
              {minuto}' MIN
            </div>
          </div>

          {/* Seletores de Velocidade e Simulação */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={togglePartida}
              className={`w-full font-mono font-black uppercase text-xs p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-all active:translate-y-0.5 ${
                emAndamento ? 'bg-amber-500 text-black' : 'bg-green-700 text-white hover:bg-green-600'
              }`}
            >
              {minuto === 90 ? 'Partida Encerrada' : emAndamento ? 'Pausar Simulação' : 'Apitar / Iniciar Jogo'}
            </button>

            <div className="grid grid-cols-3 gap-1 border-t border-zinc-200 pt-2">
              {[1, 2, 3].map(v => (
                <button
                  key={v}
                  onClick={() => setVelocidade(v)}
                  className={`font-mono font-bold text-[10px] uppercase p-1.5 border border-black ${
                    velocidade === v ? 'bg-[#1A1A1A] text-[#F4F1EA]' : 'bg-stone-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {v === 3 ? 'Turbo' : `${v}x`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA CENTRAL: ÁREA DE NARRAÇÃO EXPANDIDA (8 A 10 EVENTOS SIMULTÂNEOS) */}
        <div className="lg:col-span-2 flex flex-col bg-[#F4F1EA] border-4 border-[#1A1A1A] p-4 shadow-[4px_4px_0px_0px_#1A1A1A]">
          <h2 className="font-serif font-black text-lg uppercase tracking-tight text-[#1A1A1A] border-b-2 border-black pb-1 mb-3">
            Crónica da Partida Minuto a Minuto
          </h2>
          
          {/* Caixa Otimizada com Altura Fixa Confortável */}
          <div className="w-full h-72 overflow-y-auto pr-1 flex flex-col gap-2 font-mono text-xs leading-relaxed text-[#1A1A1A]">
            {eventos.length === 0 ? (
              <p className="font-serif italic text-zinc-400 p-2">Equipas perfiladas no túnel de acesso. Aguarda o apito inicial do árbitro...</p>
            ) : (
              eventos.map((e, index) => (
                <div 
                  key={index} 
                  className={`p-2 border border-zinc-300 shadow-[1px_1px_0px_rgba(0,0,0,0.05)] transition-all ${
                    e.tipo === 'GOLO' ? 'bg-amber-400 font-bold border-amber-600 animate-pulse text-amber-950' :
                    e.tipo === 'CARTAO' ? 'bg-amber-100 border-amber-400 text-amber-900' :
                    e.tipo === 'FIM' ? 'bg-zinc-800 text-stone-100 border-black' : 'bg-white'
                  }`}
                >
                  <span className="text-red-700 font-black mr-2">[{e.min}']</span>
                  {e.texto}
                </div>
              ))
            )}
            <div ref={cronicaEndRef} />
          </div>
        </div>

      </div>
    </div>
  );
}