// ============================================================================
// MOTOR DE SIMULAÇÃO - NOSTALGIA FC (CORRIGIDO)
// ============================================================================

// 1. Retorna a setinha visual e o modificador de rating estilo ISS/PES
export function obterModificadorSetinha(moral) {
    if (moral >= 85) return { icone: "🡡", cor: "text-red-500", mod: 4 };
    if (moral >= 65) return { icone: "🡮", cor: "text-orange-400", mod: 2 };
    if (moral >= 45) return { icone: "🡢", cor: "text-green-400", mod: 0 };
    if (moral >= 25) return { icone: "🡯", cor: "text-blue-400", mod: -2 };
    return { icone: "🡫", cor: "text-purple-500", mod: -5 };
}

// 2. Executa o sistema de roleta mobile-first para o Draft
export function executarSorteioDraft(orcamentoAtual, todosOsJogadores, atualizarTela, finalizarSorteio) {
    let contador = 0;
    const intervalo = setInterval(() => {
        const jAleatorio = todosOsJogadores[Math.floor(Math.random() * todosOsJogadores.length)];
        atualizarTela({ 
            name: jAleatorio.name, 
            time: jAleatorio.time, 
            temporada: jAleatorio.temporada,
            rating: jAleatorio.rating, 
            cost: jAleatorio.cost, 
            posicao: jAleatorio.posicao 
        });
        contador++;
        if (contador > 10) {
            clearInterval(intervalo);
            finalizarSorteio();
        }
    }, 100);
}

// 3. GERADOR Retro de Chaves da Copa por Liga (Corrigido para filtrar por liga)
export function gerarCopaAdversarios(listaJogadoresGlobal, ligaSelecionada, timeUsuarioNome = "Meu Time") {
    const jogadoresDaLiga = listaJogadoresGlobal.filter(jog => jog.liga === ligaSelecionada);
    const clubesUnicos = [...new Set(jogadoresDaLiga.map(jog => jog.clube || jog.time))];
    const rivaisValiveis = clubesUnicos.filter(nomeClube => nomeClube !== timeUsuarioNome);

    return rivaisValiveis
        .sort(() => 0.5 - Math.random())
        .slice(0, 7)
        .map((nomeClube, index) => ({
            id: `cpu_${index + 1}`,
            nome: nomeClube,
            isCPU: true,
            forcaBase: 75 + Math.floor(Math.random() * 15)
        }));
}

// 4. Simular minuto da partida
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

    // Estamina
    let gastoEstamina = dadosJogo.postura === "PRESSAO" ? 7 : 4;
    dadosJogo.titulares.forEach(j => {
        j.estamina = Math.max(5, j.estamina - gastoEstamina);
    });

    setDadosJogo(antigo => ({
        ...antigo, 
        minuto: minuto, 
        meuPlacar: meuPlacar, 
        placarRival: placarRival
    }));
    acaoNarracao(textoNarracao);
}

// 5. Finalizar campeonato
export function finalizarCampeonato(dadosJogo, acaoNarracao) {
    dadosJogo.titulares.forEach(j => {
        if (dadosJogo.meuPlacar > dadosJogo.placarRival) j.moral = Math.min(100, j.moral + 10);
        else j.moral = Math.max(0, j.moral - 12);
    });
    dadosJogo.reservas.forEach(j => {
        j.estamina = Math.min(100, j.estamina + 25);
    });

    let resultado = dadosJogo.meuPlacar > dadosJogo.placarRival ? "VITÓRIA" : "DERROTA";
    acaoNarracao(`🏁 Fim de jogo! Resultado: ${resultado}.`);
}