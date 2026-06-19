import React, { useState } from 'react';
import { gerarCopaAdversarios } from './motor'; 
import './App.css';

const ORCAMENTO_INICIAL = 100;

// Definição das posições por formação técnica
const FORMACOES = {
  '4-4-2': {
    ataque: ['ATA', 'ATA'],
    meio: ['MEI', 'MEI', 'MEI', 'MEI'],
    defesa: ['ZAG', 'ZAG', 'ZAG', 'ZAG'],
    goleiro: ['GOL']
  },
  '4-3-3': {
    ataque: ['ATA', 'ATA', 'ATA'],
    meio: ['MEI', 'MEI', 'MEI'],
    defesa: ['ZAG', 'ZAG', 'ZAG', 'ZAG'],
    goleiro: ['GOL']
  }
};

function App() {
  const [faseJogo, setFaseJogo] = useState('SELECAO_LIGA');
  const [ligaSelecionada, setLigaSelecionada] = useState(null);
  const [orcamento, setOrcamento] = useState(ORCAMENTO_INICIAL);
  const [formacao, setFormacao] = useState('4-4-2');
  
  // Estrutura de Elenco em aberto
  const [titulares, setTitulares] = useState({});
  const [reservas, setReservas] = useState(Array(5).fill(null));

  // Controle do Modal de Escolha do Jogador
  const [modalAberto, setModalAberto] = useState(false);
  const [slotAlvo, setSlotAlvo] = useState(null); 
  const [opcoesSorteadas, setOpcoesSorteadas] = useState([]);

  const selecionarLiga = (liga) => {
    setLigaSelecionada(liga);
    setFaseJogo('DRAFT');
  };

  // Clicar em qualquer slot do campo ou reserva dispara o sorteio direto
  const abrirSorteioParaSlot = (tipo, id, posicao) => {
    setSlotAlvo({ tipo, id, posicao });
    
    // MOCK provisório simulando opções baseadas na posição clicada
    const bancoMock = [
      { id: 1, name: 'Ronaldo', cost: 25, rating: 94, position: 'ATA' },
      { id: 2, name: 'Zidane', cost: 22, rating: 92, position: 'MEI' },
      { id: 3, name: 'Maldini', cost: 20, rating: 93, position: 'ZAG' },
      { id: 4, name: 'Buffon', cost: 18, rating: 90, position: 'GOL' },
      { id: 5, name: 'Figo', cost: 19, rating: 89, position: 'MEI' },
      { id: 6, name: 'Raúl', cost: 21, rating: 90, position: 'ATA' },
      { id: 7, name: 'Hierro', cost: 16, rating: 87, position: 'ZAG' },
      { id: 8, name: 'Casillas', cost: 17, rating: 88, position: 'GOL' }
    ].filter(j => j.position === posicao);

    const prontas = bancoMock.length > 0 ? bancoMock : [
      { id: 99, name: `Craque ${posicao}`, cost: 12, rating: 85, position: posicao }
    ];

    setOpcoesSorteadas(prontas);
    setModalAberto(true);
  };

  const escolherJogador = (jogador) => {
    if (jogador.cost > orcamento) {
      alert("Orçamento insuficiente!");
      return;
    }

    setOrcamento(prev => prev - jogador.cost);

    if (slotAlvo.tipo === 'titular') {
      setTitulares(prev => ({ ...prev, [slotAlvo.id]: jogador }));
    } else {
      const novosReservas = [...reservas];
      novosReservas[slotAlvo.id] = jogador;
      setReservas(novosReservas);
    }

    setModalAberto(false);
    setSlotAlvo(null);
  };

  const verificarFimDoDraft = () => {
    const totalTitularesEsperados = 11; 
    const preenchidosTitulares = Object.keys(titulares).length;
    const preenchidosReservas = reservas.filter(r => r !== null).length;

    if (preenchidosTitulares === totalTitularesEsperados && preenchidosReservas === 5) {
      const idLigas = ligaSelecionada === 'ITÁLIA' ? 'Série A' : 'La Liga';
      gerarCopaAdversarios(idLigas);
      setFaseJogo('MENU_PRINCIPAL');
    } else {
      alert(`Ainda restam slots vazios! Preencha os 11 titulares e os 5 reservas antes de avançar.`);
    }
  };

  return (
    <div className="game-container">
      <header className="topbar">
        <div className="nfc-logo">
          <div className="crest">N</div>
          <div className="word">NOSTALGIA<span>FC</span></div>
        </div>
      </header>

      {/* TELA 1: SELEÇÃO DE LIGA */}
      {faseJogo === 'SELECAO_LIGA' && (
        <div className="home-hero">
          <span className="home-tag">Temporada Ativa</span>
          <h1 className="home-title">Escolha a sua<br/>Liga Clássica</h1>
          
          <button className="btn-primary" style={{backgroundColor: '#0066cc', color: '#fff'}} onClick={() => selecionarLiga('ITÁLIA')}>
            SÉRIE A (ITÁLIA)
          </button>
          <button className="btn-primary" style={{backgroundColor: '#ffcc00', color: '#c40000', marginTop: '12px'}} onClick={() => selecionarLiga('ESPANHA')}>
            LA LIGA (ESPANHA)
          </button>
        </div>
      )}

      {/* TELA 2: QUADRO TÁTICO DE DRAFT */}
      {faseJogo === 'DRAFT' && (
        <div>
          <div className="tactic-selector">
            <button className={`btn-tactic ${formacao === '4-4-2' ? 'active' : ''}`} onClick={() => setFormacao('4-4-2')}>4-4-2</button>
            <button className={`btn-tactic ${formacao === '4-3-3' ? 'active' : ''}`} onClick={() => setFormacao('4-3-3')}>4-3-3</button>
          </div>

          <div className="hud-info">
            <div>Liga: <span>{ligaSelecionada}</span></div>
            <div>Orçamento: <span>{orcamento}M</span></div>
          </div>

          {/* CAMPO DE FUTEBOL EM GREEN */}
          <div className="soccer-field">
            {/* Linha de Ataque */}
            <div className="field-row">
              {FORMACOES[formacao].ataque.map((pos, i) => {
                const key = `ataque_${i}`;
                const j = titulares[key];
                return (
                  <div key={key} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => abrirSorteioParaSlot('titular', key, pos)}>
                    <span className="pos-tag">{pos}</span>
                    {j ? <><span className="p-name">{j.name}</span><span className="p-cost">{j.cost}M</span></> : <span>+</span>}
                  </div>
                );
              })}
            </div>

            {/* Linha de Meio Campo */}
            <div className="field-row">
              {FORMACOES[formacao].meio.map((pos, i) => {
                const key = `meio_${i}`;
                const j = titulares[key];
                return (
                  <div key={key} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => abrirSorteioParaSlot('titular', key, pos)}>
                    <span className="pos-tag">{pos}</span>
                    {j ? <><span className="p-name">{j.name}</span><span className="p-cost">{j.cost}M</span></> : <span>+</span>}
                  </div>
                );
              })}
            </div>

            {/* Linha de Defesa */}
            <div className="field-row">
              {FORMACOES[formacao].defesa.map((pos, i) => {
                const key = `defesa_${i}`;
                const j = titulares[key];
                return (
                  <div key={key} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => abrirSorteioParaSlot('titular', key, pos)}>
                    <span className="pos-tag">{pos}</span>
                    {j ? <><span className="p-name">{j.name}</span><span className="p-cost">{j.cost}M</span></> : <span>+</span>}
                  </div>
                );
              })}
            </div>

            {/* Goleiro */}
            <div className="field-row">
              {FORMACOES[formacao].goleiro.map((pos, i) => {
                const key = `goleiro_${i}`;
                const j = titulares[key];
                return (
                  <div key={key} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => abrirSorteioParaSlot('titular', key, pos)}>
                    <span className="pos-tag">{pos}</span>
                    {j ? <><span className="p-name">{j.name}</span><span className="p-cost">{j.cost}M</span></> : <span>+</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RESERVAS ABAIXO DO CAMPO */}
          <div className="substitutes-container">
            <div className="substitutes-title">Banco de Reservas (5 Vagas)</div>
            <div className="substitutes-grid">
              {reservas.map((j, idx) => {
                const posSugerida = idx === 0 ? 'GOL' : idx < 3 ? 'ZAG' : idx === 3 ? 'MEI' : 'ATA';
                return (
                  <div key={`reserva_${idx}`} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => abrirSorteioParaSlot('reserva', idx, posSugerida)}>
                    <span className="pos-tag">{j ? j.position : posSugerida}</span>
                    {j ? <><span className="p-name">{j.name}</span><span className="p-cost">{j.cost}M</span></> : <span>+</span>}
                  </div>
                );
              })}
            </div>
          </div>

          <button className="btn-primary" style={{ marginTop: '16px' }} onClick={verificarFimDoDraft}>
            Pronto / Finalizar Elenco
          </button>
        </div>
      )}

      {/* TELA 3: SUCESSO */}
      {faseJogo === 'MENU_PRINCIPAL' && (
        <div className="home-hero">
          <span className="home-tag">Draft Concluído</span>
          <h1 className="home-title">Time Pronto!</h1>
          <button className="btn-primary" onClick={() => { setTitulares({}); setReservas(Array(5).fill(null)); setOrcamento(ORCAMENTO_INICIAL); setFaseJogo('SELECAO_LIGA'); }}>
            Jogar Novamente
          </button>
        </div>
      )}

      {/* MODAL DE ESCOLHA DE JOGADORES */}
      {modalAberto && (
        <div className="draft-options-overlay">
          <div className="draft-modal">
            <button className="btn-close-modal" onClick={() => setModalAberto(false)}>X</button>
            <h3>Sorteio: {slotAlvo?.posicao}</h3>
            <p style={{fontSize: '13px', color: 'var(--nfc-muted)'}}>Contrate um atleta para esta vaga:</p>
            
            {opcoesSorteadas.map((jogador) => (
              <div key={jogador.id} className="option-card" onClick={() => escolherJogador(jogador)}>
                <div>
                  <strong style={{color: '#fff'}}>{jogador.name}</strong>
                  <div style={{fontSize: '12px', color: 'var(--nfc-muted)'}}>Rating: {jogador.rating}</div>
                </div>