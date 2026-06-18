import React, { useState, useEffect } from 'react';
import { executarSorteioDraft, gerarCopaAdversarios } from './motor';

// Lista de posições que o usuário precisa preencher
const posicoesOrdem = ['GOL', 'ZAG', 'ZAG', 'MEI', 'MEI', 'ATA', 'ATA'];
const ORCAMENTO_INICIAL = 100;

function App() {
  // Estados do Jogo
  const [faseJogo, setFaseJogo] = useState('SELECAO_LIGA');
  const [ligaSelecionada, setLigaSelecionada] = useState(null);
  const [orcamento, setOrcamento] = useState(ORCAMENTO_INICIAL);
  const [timeUsuario, setTimeUsuario] = useState([]);
  const [posicaoAtualIndex, setPosicaoAtualIndex] = useState(0);
  const [listaJogadoresGlobal, setListaJogadoresGlobal] = useState([]); // Imagine isso populado com seus dados

  // 1. Iniciar o Draft após escolher a Liga
  const iniciarDraft = (liga) => {
    setLigaSelecionada(liga);
    setFaseJogo('DRAFT');
  };

  // 2. Lógica de Escolha (Chamada após o sorteio)
  const processarEscolhaJogador = (jogadorSorteado) => {
    // Verifica a trava de Salary Cap
    if (jogadorSorteado.cost > orcamento) {
      alert("Orçamento insuficiente para este jogador!");
      return;
    }

    // Adiciona ao time e desconta o orçamento
    const novoTime = [...timeUsuario, jogadorSorteado];
    setTimeUsuario(novoTime);
    setOrcamento(orcamento - jogadorSorteado.cost);

    // Avança para a próxima posição
    const proximaPosicao = posicaoAtualIndex + 1;
    if (proximaPosicao < posicoesOrdem.length) {
      setPosicaoAtualIndex(proximaPosicao);
    } else {
      // Fim do Draft: Gera os adversários e vai para o menu
      const adversarios = gerarCopaAdversarios(listaJogadoresGlobal, ligaSelecionada);
      console.log("Copa gerada:", adversarios);
      setFaseJogo('MENU_PRINCIPAL');
    }
  };

  // 3. Renderização Condicional (A alma da transição de telas)
  return (
    <div className="game-container">
      {faseJogo === 'SELECAO_LIGA' && (
        <div className="retro-menu">
          <h1>Escolha sua Liga</h1>
          <button onClick={() => iniciarDraft('ITALIA')}>Série A (Itália)</button>
          <button onClick={() => iniciarDraft('ESPANHA')}>La Liga (Espanha)</button>
        </div>
      )}

      {faseJogo === 'DRAFT' && (
        <div className="draft-screen">
          <h2>Draftando: {posicoesOrdem[posicaoAtualIndex]}</h2>
          <p>Orçamento Restante: {orcamento}</p>
          {/* Aqui você chama a roleta do motor */}
          <button onClick={() => executarSorteioDraft(
            orcamento, 
            listaJogadoresGlobal, 
            (j) => console.log("Sorteando:", j.name), 
            () => processarEscolhaJogador({name: "Jogador X", cost: 10, posicao: "GOL"}) // Exemplo de mock
          )}>
            Sortear Jogador
          </button>
        </div>
      )}

      {faseJogo === 'MENU_PRINCIPAL' && (
        <div className="menu-principal">
          <h1>Time Montado!</h1>
          <p>Prepare-se para a Copa.</p>
        </div>
      )}
    </div>
  );
}
{faseJogo === 'SELECAO_LIGA' && (
  <div className="retro-menu">
    <h1>NOSTALGIA FC</h1>
    
    <button 
      className="btn-italia" 
      onClick={() => selecionarLiga('ITÁLIA')}
    >
      SÉRIE A (ITÁLIA)
    </button>

    <button 
      className="btn-espanha" 
      onClick={() => selecionarLiga('ESPANHA')}
    >
      LA LIGA (ESPANHA)
    </button>
  </div>
)}

export default App;