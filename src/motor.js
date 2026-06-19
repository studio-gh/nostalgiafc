// ============================================================================
// MOTOR DE SIMULAÇÃO - NOSTALGIA FC (CORRIGIDO)
// ============================================================================

// 1. BANCO DE DADOS OFICIAL (Adicionado para resolver o erro de importação)
export const PLAYERS_DB = {
    "Juventus-92": [
        { id: 1, name: "Roberto Baggio", cost: 25, rating: 94, pos: "ATA" },
        { id: 2, name: "Stefano Tacconi", cost: 15, rating: 85, pos: "GOL" },
        { id: 3, name: "Thomas Hässler", cost: 18, rating: 88, pos: "MEI" },
        { id: 4, name: "Jürgen Kohler", cost: 20, rating: 89, pos: "ZAG" }
    ],
    "Milan-94": [
        { id: 5, name: "Paolo Maldini", cost: 22, rating: 93, pos: "ZAG" },
        { id: 6, name: "Franco Baresi", cost: 20, rating: 92, pos: "ZAG" },
        { id: 7, name: "Dejan Savićević", cost: 19, rating: 90, pos: "MEI" },
        { id: 8, name: "Marco van Basten", cost: 25, rating: 95, pos: "ATA" }
    ]
    // ... adicione aqui o restante dos times que você já tinha
};

// 2. Retorna a setinha visual e o modificador de rating
export function obterModificadorSetinha(moral) {
    if (moral >= 85) return { icone: "🡡", cor: "text-red-500", mod: 4 };
    if (moral >= 65) return { icone: "🡮", cor: "text-orange-400", mod: 2 };
    if (moral >= 45) return { icone: "🡢", cor: "text-green-400", mod: 0 };
    if (moral >= 25) return { icone: "🡯", cor: "text-blue-400", mod: -2 };
    return { icone: "🡫", cor: "text-purple-500", mod: -5 };
}

// 3. Executa o sistema de roleta (Ajustado para o novo modelo)
export function executarSorteioDraft(orcamentoAtual, todosOsJogadores, atualizarTela, finalizarSorteio) {
    let contador = 0;
    const intervalo = setInterval(() => {
        const jAleatorio = todosOsJogadores[Math.floor(Math.random() * todosOsJogadores.length)];
        atualizarTela(jAleatorio);
        contador++;
        if (contador > 10) {
            clearInterval(intervalo);
            finalizarSorteio();
        }
    }, 100);
}

// 4. GERADOR Retro de Chaves da Copa
export function gerarCopaAdversarios(listaJogadoresGlobal, ligaSelecionada, timeUsuarioNome = "Meu Time") {
    const jogadoresDaLiga = listaJogadoresGlobal.filter(jog => jog.liga === ligaSelecionada);
    const clubesUnicos = [...new Set(jogadoresDaLiga.map(jog => jog.clube || jog.time))];
    return clubesUnicos
        .filter(nomeClube => nomeClube !== timeUsuarioNome)
        .sort(() => 0.5 - Math.random())
        .slice(0, 7)
        .map((nomeClube, index) => ({
            id: `cpu_${index + 1}`,
            nome: nomeClube,
            isCPU: true,
            forcaBase: 75 + Math.floor(Math.random() * 15)
        }));
}

// 5. Simular minuto da partida
export function simularMinutoPartida(minuto, dadosJogo, setDadosJogo, acaoNarracao) {
    let { meuPlacar, placarRival } = dadosJogo;
    let textoNarracao = `⏱️ ${minuto}' - Bola rolando.`;
    let chanceMinuto = Math.random() * 100;
    let limiteGolo = dadosJogo.postura === "PRESSAO" ? 97 : 98.5; 

    if (chanceMinuto > limiteGolo) {
        if (Math.random() > 0.5) {
            meuPlacar++;
            textoNarracao = `⚽ ${minuto}' - GOOOOOOL!`;
        } else {
            placarRival++;
            textoNarracao = `⚽ ${minuto}' - GOL ADVERSÁRIO!`;
        }
    }

    dadosJogo.titulares.forEach(j => {
        j.estamina = Math.max(5, j.estamina - (dadosJogo.postura === "PRESSAO" ? 7 : 4));
    });

    setDadosJogo(antigo => ({ ...antigo, minuto, meuPlacar, placarRival }));
    acaoNarracao(textoNarracao);
}

// 6. Finalizar campeonato
export function finalizarCampeonato(dadosJogo, acaoNarracao) {
    dadosJogo.titulares.forEach(j => {
        if (dadosJogo.meuPlacar > dadosJogo.placarRival) j.moral = Math.min(100, j.moral + 10);
        else j.moral = Math.max(0, j.moral - 12);
    });
    acaoNarracao(`🏁 Fim de jogo! Resultado: ${dadosJogo.meuPlacar > dadosJogo.placarRival ? "VITÓRIA" : "DERROTA"}.`);
}