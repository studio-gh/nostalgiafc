const { useState } = React; // Pega o useState direto do React global injetado pelo CDN

const FORMACOES = {
  '4-4-2': { ataque: ['ATA', 'ATA'], meio: ['MEI', 'MEI', 'MEI', 'MEI'], defesa: ['ZAG', 'ZAG', 'ZAG', 'ZAG'], goleiro: ['GOL'] },
  '4-3-3': { ataque: ['ATA', 'ATA', 'ATA'], meio: ['MEI', 'MEI', 'MEI'], defesa: ['ZAG', 'ZAG', 'ZAG', 'ZAG'], goleiro: ['GOL'] }
};

const ORCAMENTO_INICIAL = 100;

function App() {
  const [faseJogo, setFaseJogo] = useState('SELECAO_LIGA');
  const [ligaSelecionada, setLigaSelecionada] = useState(null);
  const [orcamento, setOrcamento] = useState(ORCAMENTO_INICIAL);
  const [formacao, setFormacao] = useState('4-4-2');
  const [titulares, setTitulares] = useState({});
  const [reservas, setReservas] = useState(Array(5).fill(null));
  const [modalAberto, setModalAberto] = useState(false);
  const [slotAlvo, setSlotAlvo] = useState(null); 
  const [opcoesSorteadas, setOpcoesSorteadas] = useState([]);
  
  // Novos estados para a mecânica de Slot Machine
  const [timesDisponiveis, setTimesDisponiveis] = useState(Object.keys(PLAYERS_DB));
  const [animando, setAnimando] = useState(false);

  const selecionarLiga = (liga) => {
    setLigaSelecionada(liga);
    setFaseJogo('DRAFT');
  };

  const sortearTimeParaSlot = (tipo, id, posicao) => {
    if (timesDisponiveis.length === 0) return alert("Não há mais times!");
    setAnimando(true);
    
    // Animação de 1.5s
    setTimeout(() => {
      const indice = Math.floor(Math.random() * timesDisponiveis.length);
      const timeKey = timesDisponiveis[indice];
      
      // Remove o time para não repetir
      setTimesDisponiveis(prev => prev.filter((_, i) => i !== indice));
      
      setOpcoesSorteadas(PLAYERS_DB[timeKey]);
      setSlotAlvo({ tipo, id, posicao });
      setModalAberto(true);
      setAnimando(false);
    }, 1500);
  };

  const escolherJogador = (jogador) => {
    if (jogador.cost > orcamento) return alert("Orçamento insuficiente!");
    setOrcamento(prev => prev - jogador.cost);
    
    if (slotAlvo.tipo === 'titular') {
      setTitulares(prev => ({ ...prev, [slotAlvo.id]: jogador }));
    } else {
      const novosReservas = [...reservas];
      novosReservas[slotAlvo.id] = jogador;
      setReservas(novosReservas);
    }
    setModalAberto(false);
  };

  return (
    <div className="game-container">
      {/* ... (Header e seleção de liga mantidos) ... */}
      
      {faseJogo === 'DRAFT' && (
        <div>
          {/* Botão de Sortear que chama a função com animação */}
          <button className="btn-primary" disabled={animando} onClick={() => sortearTimeParaSlot('titular', 'ataque_0', 'ATA')}>
            {animando ? "SORTEANDO..." : "🎲 SORTEAR NOVO TIME"}
          </button>

          <div className="soccer-field">
            {Object.keys(FORMACOES[formacao]).map(setor => (
              <div key={setor} className="field-row">
                {FORMACOES[formacao][setor].map((pos, i) => {
                  const key = `${setor}_${i}`;
                  const j = titulares[key];
                  return (
                    <div key={key} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => sortearTimeParaSlot('titular', key, pos)}>
                      <span className="pos-tag">{pos}</span>
                      {j ? <><span className="p-name">{j.name}</span></> : <span>+</span>}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* ... (Restante do JSX com reservas e finalização) ... */}
        </div>
      )}

      {modalAberto && (
        <div className="draft-options-overlay">
          <div className="draft-modal">
            <h3>Escolha um jogador deste elenco:</h3>
            {opcoesSorteadas.map((j, idx) => (
              <div key={idx} className="option-card" onClick={() => escolherJogador(j)}>
                <strong>{j.name}</strong> <span>{j.pos}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);