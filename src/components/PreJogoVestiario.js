import React, { useState, useEffect } from 'react';
import CardJogador from './CardJogador';

/**
 * Componente: PreJogoVestiario (V12)
 * Hub de preparação tática antes de iniciar uma nova partida da campanha.
 */
export default function PreJogoVestiario({
  elenco,            // Array completo de jogadores do utilizador (Titulares + Suplentes)
  estatisticas,      // { artilheiros: [], mvps: [], cartoes: {} }
  proximoAdversario, // Objeto do time adversário { nome: 'AJAX 1995', logo: '...' }
  modoManager = false,
  onConfirmarEscalacao // Função para disparar a partida com o time atualizado
}) {
  // Estados locais para gerir substituições
  const [titulares, setTitulares] = useState([]);
  const [suplentes, setSuplentes] = useState([]);
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);
  const [sinergiasAtivas, setSinergiasAtivas] = useState([]);

  // Inicializa e separa o elenco
  useEffect(() => {
    if (elenco) {
      setTitulares(elenco.filter(j => j.titular));
      setSuplentes(elenco.filter(j => !j.titular));
    }
  }, [elenco]);

  // Executa o cálculo de Sinergias/Entrosamento sempre que os titulares mudam
  useEffect(() => {
    verificarSinergias(titulares);
  }, [titulares]);

  // Regra de Negócio: Detetar Duplas Dinâmicas Históricas e Mesmos Países
  const verificarSinergias = (listaTitulares) => {
    const sinergias = [];
    const nomes = listaTitulares.map(j => j.nome.toUpperCase());
    
    // 1. Base de dados de Duplas Dinâmicas Clássicas
    const duplasHistoricas = [
      { id: 'rom_beb', nome: 'Dupla Dinâmica: Romário & Bebeto', triggers: ['ROMÁRIO', 'BEBETO'] },
      { id: 'ron_riv', nome: 'Parceria de Ouro: Ronaldo & Rivaldo', triggers: ['RONALDO', 'RIVALDO'] },
      { id: 'xav_ini', nome: 'Maestria Total: Xavi & Iniesta', triggers: ['XAVI', 'INIESTA'] },
      { id: 'mal_nes', nome: 'Muralha de Milão: Maldini & Nesta', triggers: ['MALDINI', 'NESTA'] }
    ];

    duplasHistoricas.forEach(dupla => {
      const encontrou = dupla.triggers.every(t => nomes.some(n => n.includes(t)));
      if (encontrou) sinergias.push(dupla);
    });

    // 2. Contagem por Nacionalidade (Bónus de País se tiver 4+)
    const paises = {};
    listaTitulares.forEach(j => {
      if (j.nacionalidade) paises[j.nacionalidade] = (paises[j.nacionalidade] || 0) + 1;
    });
    
    Object.keys(paises).forEach(p => {
      if (paises[p] >= 4) {
        sinergias.push({ id: `pais_${p}`, nome: `Conexão Tática: Bloco do ${p.toUpperCase()} (+Momentum)` });
      }
    });

    setSinergiasAtivas(sinergias);
  };

  // Lógica de Troca/Substituição (Vestiário Interativo)
  const handleCliqueJogador = (jogador) => {
    if (!jogadorSelecionado) {
      setJogadorSelecionado(jogador);
    } else {
      // Se clicou no mesmo, cancela a seleção
      if (jogadorSelecionado.id === jogador.id) {
        setJogadorSelecionado(null);
        return;
      }

      // Se um for titular e o outro suplente, realiza a substituição de slots
      if (jogadorSelecionado.titular !== jogador.titular) {
        const novosTitulares = [...titulares];
        const novosSuplentes = [...suplentes];

        if (jogadorSelecionado.titular) {
          // Trocar selecionado(titular) por jogador(suplente)
          const idxT = novosTitulares.findIndex(j => j.id === jogadorSelecionado.id);
          const idxS = novosSuplentes.findIndex(j => j.id === jogador.id);
          
          novosTitulares[idxT] = { ...jogador, titular: true };
          novosSuplentes[idxS] = { ...jogadorSelecionado, titular: false };
        } else {
          // Trocar selecionado(suplente) por jogador(titular)
          const idxT = novosTitulares.findIndex(j => j.id === jogador.id);
          const idxS = novosSuplentes.findIndex(j => j.id === jogadorSelecionado.id);

          novosTitulares[idxT] = { ...jogadorSelecionado, titular: true };
          novosSuplentes[idxS] = { ...jogador, titular: false };
        }

        setTitulares(novosTitulares);
        setSuplentes(novosSuplentes);
      }
      setJogadorSelecionado(null);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 bg-[#F4F1EA] text-[#1A1A1A] font-sans border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
      {/* CABEÇALHO EDITORIAL */}
      <div className="border-b-4 border-[#1A1A1A] pb-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-serif font-black text-3xl uppercase tracking-tight text-red-700">Preparação de Vestiário</h1>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 mt-1">Gira a energia do teu XI e ativa bónus históricos</p>
        </div>
        <button 
          onClick={() => onConfirmarEscalacao([...titulares, ...suplentes])}
          className="bg-green-700 text-white font-mono font-black uppercase text-sm px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-green-600 hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 transition-all"
        >
          Ir para o Jogo ➔
        </button>
      </div>

      {/* GRID PRINCIPAL EM DUAS COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLUNA 1 & 2: O CAMPO / GERENCIAMENTO TÁTICO */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-zinc-900 border-4 border-black p-4 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <h2 className="text-[#F4F1EA] font-mono font-black uppercase text-xs tracking-widest mb-4">XI Inicial (Titulares)</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {titulares.map(j => (
                <div key={j.id} className={`transition-transform ${jogadorSelecionado?.id === j.id ? 'scale-105 ring-4 ring-red-600' : ''}`}>
                  <CardJogador 
                    jogador={j} 
                    minificado={true} 
                    modoManager={modoManager} 
                    onClick={() => handleCliqueJogador(j)} 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-black p-4">
            <h2 className="font-mono font-black uppercase text-xs tracking-widest text-zinc-600 mb-4">Banco de Reservas de Luxo</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {suplentes.map(j => (
                <div key={j.id} className={`transition-transform ${jogadorSelecionado?.id === j.id ? 'scale-105 ring-4 ring-red-600' : ''}`}>
                  <CardJogador 
                    jogador={j} 
                    minificado={true} 
                    modoManager={modoManager} 
                    onClick={() => handleCliqueJogador(j)} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA 3: ESTATÍSTICAS DA CAMPANHA & SINERGIAS */}
        <div className="flex flex-col gap-6">
          {/* PAINEL DE ADVERSÁRIO */}
          <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <span className="font-mono text-[10px] font-bold text-red-600 uppercase">Próximo Confronto</span>
            <h3 className="font-serif font-black text-xl uppercase tracking-tight mt-1">{proximoAdversario?.nome || 'ADVERSÁRIO'}</h3>
          </div>

          {/* SINERGIAS ATIVADAS */}
          <div className="bg-stone-100 border-2 border-black p-4">
            <h3 className="font-mono font-black uppercase text-xs tracking-wider mb-3">Sinergias no Campo</h3>
            {sinergiasAtivas.length === 0 ? (
              <p className="text-zinc-400 font-serif italic text-xs">Nenhum entrosamento histórico ativo. Combina duplas da vida real para ganhar +3 OVR.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {sinergiasAtivas.map(s => (
                  <div key={s.id} className="bg-amber-400/20 border border-amber-600 p-2 text-xs font-mono uppercase font-bold text-amber-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-none inline-block"></span>
                    {s.nome}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RESUMO DE CAMPANHA (ARTILHARIA, MVPS E CARTÕES) */}
          <div className="bg-[#1A1A1A] text-[#F4F1EA] p-4 border-2 border-black">
            <h3 className="font-mono font-black uppercase text-xs tracking-widest border-b border-zinc-700 pb-2 mb-3">Boletim do Plantão</h3>
            
            {/* Artilharia */}
            <div className="mb-4">
              <h4 className="text-zinc-400 font-mono text-[10px] uppercase font-bold mb-1">⚽ Top Marcadores</h4>
              {estatisticas?.artilheiros?.length > 0 ? (
                estatisticas.artilheiros.slice(0, 2).map((a, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono uppercase">
                    <span>{a.nome}</span> <span>{a.gols} G</span>
                  </div>
                ))
              ) : <p className="text-zinc-600 text-xs italic">Nenhum golo registado.</p>}
            </div>

            {/* MVPs */}
            <div className="mb-4">
              <h4 className="text-zinc-400 font-mono text-[10px] uppercase font-bold mb-1">⭐ Líderes em Craque do Jogo</h4>
              {estatisticas?.mvps?.length > 0 ? (
                estatisticas.mvps.slice(0, 2).map((m, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono uppercase">
                    <span>{m.nome}</span> <span>{m.qtd}x</span>
                  </div>
                ))
              ) : <p className="text-zinc-600 text-xs italic">Nenhum prémio distribuído.</p>}
            </div>

            {/* Cartões */}
            <div>
              <h4 className="text-zinc-400 font-mono text-[10px] uppercase font-bold mb-1">🟨 Controlo de Disciplina</h4>
              <p className="text-xs font-mono text-zinc-300">Consulta suspensões no menu tático central.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}