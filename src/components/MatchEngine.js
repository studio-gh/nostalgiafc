// src/components/MatchEngine.js
import React, { useState, useEffect, useRef } from 'react';

/**
 * PARTE 4: MOTOR DE SIMULAÇÃO REALISTA (MATCH ENGINE V3.0)
 * Transmissão Minuto a Minuto, Eventos Narrativos, Controle de Velocidade e Pênaltis Manuais.
 */
export default function MatchEngine({ 
    userTeamName, 
    userTeamOVR, 
    draftedTeam, 
    opponent, 
    onMatchFinished 
}) {
    // Estados do Jogo Regulamentar
    const [minute, setMinute] = useState(0);
    const [scoreUser, setScoreUser] = useState(0);
    const [scoreOpp, setScoreOpp] = useState(0);
    const [gameLog, setGameLog] = useState([]);
    const [momentum, setMomentum] = useState(50); // 0 (Adversário) a 100 (Usuário)
    const [simSpeed, setSimSpeed] = useState(200); // 200ms = 2x, 500ms = 1x, 50ms = 5x
    const [matchPhase, setMatchPhase] = useState('REGULAR'); // REGULAR, PENALTIES, FINISHED
    const [activeEvents, setActiveEvents] = useState({ userGoals: [], oppGoals: [], cards: [], injuries: [] });

    // Estados da Disputa de Pênaltis Manuais
    const [penRound, setPenRound] = useState(0);
    const [penUserScore, setPenUserScore] = useState(0);
    const [penOppScore, setPenOppScore] = useState(0);
    const [penTurn, setPenTurn] = useState('USER_SHOOT'); // USER_SHOOT, USER_DEFEND
    const [penHistory, setPenHistory] = useState([]); // { team: 'user'|'opp', hit: bool, round: int }
    const [penMessage, setPenMessage] = useState('A partida terminou empatada! Prepare-se para a marca da cal.');

    const logEndRef = useRef(null);
    const timerRef = useRef(null);

    // Auto-scroll do feed de crônicas de rádio
    useEffect(() => {
        if (logEndRef.current) {
            logEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [gameLog]);

    // Inicialização e Loop da Partida Minuto a Minuto
    useEffect(() => {
        if (matchPhase === 'REGULAR') {
            timerRef.current = setInterval(() => {
                setMinute(prev => {
                    if (prev >= 90) {
                        clearInterval(timerRef.current);
                        handle90MinutesEnded();
                        return 90;
                    }
                    const nextMin = prev + 1;
                    runMinuteLogic(nextMin);
                    return nextMin;
                });
            }, simSpeed);
        }
        return () => clearInterval(timerRef.current);
    }, [matchPhase, simSpeed, momentum, scoreUser, scoreOpp]);

    // Efeito para ajustar velocidade dinamicamente no setInterval ativo
    useEffect(() => {
        if (matchPhase === 'REGULAR') {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(() => {
                setMinute(prev => {
                    if (prev >= 90) {
                        clearInterval(timerRef.current);
                        handle90MinutesEnded();
                        return 90;
                    }
                    const nextMin = prev + 1;
                    runMinuteLogic(nextMin);
                    return nextMin;
                });
            }, simSpeed);
        }
        return () => clearInterval(timerRef.current);
    }, [simSpeed]);

    // Sintetizador Físico de Áudio Retrô (Sem arquivos externos para garantir performance)
    const playBeep = (freq, duration) => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) { console.log(e); }
    };

    // Lógica Central de Eventos a cada Minuto
    const runMinuteLogic = (currentMin) => {
        // Cálculo de probabilidade ponderado por OVR e Momentum de jogo
        const ovrDiff = userTeamOVR - (opponent.ovr || 85);
        const userChanceBase = 0.05 + (ovrDiff * 0.002) + ((momentum - 50) * 0.001);
        const oppChanceBase = 0.05 - (ovrDiff * 0.002) - ((momentum - 50) * 0.001);

        // Flutuação aleatória controlada do Momentum da partida
        let momentumDelta = (Math.random() - 0.5) * 6;
        if (Math.random() < 0.1) momentumDelta += ovrDiff > 0 ? 8 : -8; // Peso da Camisa
        setMomentum(prev => Math.max(10, Math.min(90, Math.round(prev + momentumDelta))));

        const randEvent = Math.random();

        // 1. CHANCE DE GOL DO USUÁRIO
        if (randEvent < userChanceBase) {
            // Sorteia o jogador que participou da jogada baseado no peso clássico por posição
            const scorersPool = [];
            draftedTeam.forEach(p => {
                if (!p) return;
                let weight = 1;
                if (p.pos === 'ST' || p.pos === 'CF') weight = 40;
                if (p.pos === 'WINGER' || p.pos === 'CAM') weight = 20;
                if (p.pos === 'MID' || p.pos === 'CM') weight = 8;
                if (p.pos === 'DEF' || p.pos === 'CB') weight = 2;
                if (p.pos === 'GK') weight = 0.1; // Goleiro raríssimo fazer gol
                for (let i = 0; i < weight * 10; i++) scorersPool.push(p.name);
            });
            const scorerName = scorersPool.length > 0 ? scorersPool[Math.floor(Math.random() * scorersPool.length)] : 'Craque Retrô';

            setScoreUser(s => s + 1);
            setActiveEvents(prev => ({ ...prev, userGoals: [...prev.userGoals, { name: scorerName, min: currentMin }] }));
            setGameLog(prev => [...prev, `[${currentMin}'] ⚽ GOOOOOOL DO ${userTeamName}! Sensacional batida de ${scorerName}! O placar se altera.`]);
            setMomentum(85); // Empurra a barra pra frente
            playBeep(880, 0.4); // Apito do gol
        } 
        // 2. CHANCE DE GOL DO ADVERSÁRIO
        else if (randEvent > 1 - oppChanceBase) {
            setScoreOpp(s => s + 1);
            const oppPlayers = ['Artilheiro Matador', 'Camisa 10 Lenda', 'Meia Motorzinho', 'Zagueiro Grandão'];
            const oppScorer = oppPlayers[Math.floor(Math.random() * oppPlayers.length)];
            
            setActiveEvents(prev => ({ ...prev, oppGoals: [...prev.oppGoals, { name: oppScorer, min: currentMin }] }));
            setGameLog(prev => [...prev, `[${currentMin}'] ⚽ GOL DO ${opponent.name}! Em jogada rápida, ${oppScorer} empata ou amplia o placar.`]);
            setMomentum(15);
            playBeep(440, 0.4);
        }
        // 3. COMENTÁRIO NARRATIVO RELEVANTE DE RÁDIO
        else if (Math.random() < 0.22) {
            const narrations = [
                `A torcida canta alto na arquibancada, clima de fita VHS acesa!`,
                `Jogo pego no meio campo, faltas duras e muita catimba retrô.`,
                `Subida perigosa pela lateral, cruzamento na área mas o goleiro afasta com estilo!`,
                `O técnico grita da beira do gramado pedindo atenção na marcação sob pressão.`,
                `Que drible espetacular no meio campo! Levantou o estádio de vez.`,
                `Cartão amarelo mostrado pelo árbitro após entrada dura por trás!`
            ];
            setGameLog(prev => [...prev, `[${currentMin}'] 📻 ${narrations[Math.floor(Math.random() * narrations.length)]}`]);
            if (Math.random() < 0.05) playBeep(600, 0.08); // Som sutil de torcida/clique
        }
    };

    const handle90MinutesEnded = () => {
        playBeep(523.25, 0.2); setTimeout(() => playBeep(523.25, 0.4), 250); // Apito final duplo
        if (scoreUser === scoreOpp) {
            setMatchPhase('PENALTIES');
            setGameLog(prev => [...prev, `🏁 [90'] FIM DE PAPO! Jogo duríssimo termina em ${scoreUser}x${scoreOpp}. Vamos para as penalidades máximas!`]);
        } else {
            setMatchPhase('FINISHED');
        }
    };

    // Lógica da Disputa de Pênaltis Manuais
    const handlePenaltyChoice = (direction) => {
        const oppDirections = ['ESQUERDA', 'CENTRO', 'DIREITA'];
        const oppChoice = oppDirections[Math.floor(Math.random() * oppDirections.length)];
        const isHit = direction !== oppChoice; // Se escolher canto oposto do goleiro/batedor adversário, dá bom

        if (penTurn === 'USER_SHOOT') {
            if (isHit) {
                setPenUserScore(s => s + 1);
                setPenHistory(prev => [...prev, { team: 'user', hit: true, round: penRound }]);
                setPenMessage(`✅ Você chutou na ${direction} e o goleiro voou para a ${oppChoice}! GOL DO ${userTeamName}!`);
                playBeep(784, 0.15);
            } else {
                setPenHistory(prev => [...prev, { team: 'user', hit: false, round: penRound }]);
                setPenMessage(`❌ Defendeu! Você bateu na ${direction} e o goleiro buscou firme no mesmo canto!`);
                playBeep(330, 0.2);
            }
            setPenTurn('USER_DEFEND');
        } else {
            if (!isHit) { // Usuário acertou o canto do chute adversário -> DEFENDEU
                setPenHistory(prev => [...prev, { team: 'opp', hit: false, round: penRound }]);
                setPenMessage(`🧤 SENSACIONAL! Você pulou na ${direction} e buscou o chute cobrado na ${oppChoice}! DEFESA HISTÓRICA!`);
                playBeep(880, 0.25);
            } else {
                setPenOppScore(s => s + 1);
                setPenHistory(prev => [...prev, { team: 'opp', hit: true, round: penRound }]);
                setPenMessage(`⚽ Gol deles. Você saltou para a ${direction}, mas o atacante cobrou com frieza na ${oppChoice}.`);
                playBeep(440, 0.15);
            }
            
            // Validação de Morte Súbita ou Fim de Rodada (Padrão FIFA de Penalidades)
            const nextRound = penRound + 1;
            const userRemaining = Math.max(0, 5 - nextRound);
            const oppRemaining = Math.max(0, 5 - nextRound);

            // Regra matemática de encerramento antes das 5 cobranças
            if (penUserScore > penOppScore + oppRemaining || penOppScore > penUserScore + userRemaining) {
                endPenalties();
            } else if (nextRound >= 5 && penUserScore !== penOppScore) {
                endPenalties();
            } else {
                setPenRound(nextRound);
                setPenTurn('USER_SHOOT');
            }
        }
    };

    const endPenalties = () => {
        setMatchPhase('FINISHED');
        setGameLog(prev => [...prev, `🏆 FIM DA DISPUTA DE PÊNALTIS! Placar final das penalidades: ${penUserScore} a ${penOppScore}.`]);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* PLACAR ELETRÔNICO RETRÔ */}
            <div className="md:col-span-12 border-4 border-obsidian p-4 bg-stone-900 text-white shadow-[4px_4px_0px_#1A1A1A] flex flex-col items-center justify-center relative rounded-md overflow-hidden">
                <div className="absolute top-2 left-4 font-mono text-[9px] tracking-widest text-retroGold uppercase">📺 Transmissão ao Vivo</div>
                
                <div className="flex items-center gap-6 md:gap-12 my-3 w-full justify-center px-4">
                    <div className="text-right flex-1">
                        <h2 className="font-anton text-2xl md:text-4xl uppercase tracking-wide leading-none text-white">{userTeamName}</h2>
                        <span className="font-mono text-[9px] text-stone-400">OVR {userTeamOVR}</span>
                    </div>
                    
                    <div className="bg-black border-2 border-retroGold px-4 py-2 font-mono text-center min-w-[100px] shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                        <div className="text-[10px] text-retroGold tracking-widest uppercase font-bold">⏱️ MINUTO</div>
                        <div className="font-anton text-3xl text-white leading-none">{minute}'</div>
                    </div>

                    <div className="text-left flex-1">
                        <h2 className="font-anton text-2xl md:text-4xl uppercase tracking-wide leading-none text-retroGold">{opponent.name}</h2>
                        <span className="font-mono text-[9px] text-stone-400">OVR {opponent.ovr || 85}</span>
                    </div>
                </div>

                <div className="font-anton text-5xl md:text-6xl bg-black px-8 py-2 border border-stone-700 tracking-wider font-black text-center text-green-400 rounded shadow-inner">
                    {scoreUser} <span className="text-stone-500 text-3xl font-sans mx-2">x</span> {scoreOpp}
                </div>
            </div>

            {/* CONTROLES DE VELOCIDADE E BARRA DE MOMENTUM */}
            <div className="md:col-span-12 border-2 border-obsidian p-3 bg-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-[2px_2px_0px_#000]">
                <div className="w-full md:w-1/2 flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] font-bold text-obsidian uppercase">
                        <span>📉 Pressão Adversária</span>
                        <span>📈 Seu Momentum ({momentum}%)</span>
                    </div>
                    <div className="w-full bg-stone-200 border border-obsidian h-4 relative overflow-hidden rounded-xs">
                        <div 
                            style={{ width: `${momentum}%` }}
                            className="bg-gradient-to-r from-amber-500 to-retroGold h-full transition-all duration-300 border-r-2 border-obsidian"
                        ></div>
                    </div>
                </div>

                {matchPhase === 'REGULAR' && (
                    <div className="flex items-center gap-1 bg-stone-100 p-1 border border-obsidian">
                        <span className="font-mono text-[9px] uppercase font-bold px-2 text-stone-500">Velocidade:</span>
                        <button onClick={() => setSimSpeed(500)} className={`p-1 px-3 border font-mono text-xs font-bold uppercase ${simSpeed === 500 ? 'bg-obsidian text-white' : 'bg-white hover:bg-stone-50'}`}>1x</button>
                        <button onClick={() => setSimSpeed(200)} className={`p-1 px-3 border font-mono text-xs font-bold uppercase ${simSpeed === 200 ? 'bg-obsidian text-white' : 'bg-white hover:bg-stone-50'}`}>2x</button>
                        <button onClick={() => setSimSpeed(50)} className={`p-1 px-3 border font-mono text-xs font-bold uppercase ${simSpeed === 50 ? 'bg-retroRed text-white border-retroRed' : 'bg-white hover:bg-stone-50'}`}>🔥 Turbo</button>
                    </div>
                )}
            </div>

            {/* CRÔNICA DO RÁDIO E FEED MINUTO A MINUTO */}
            <div className="md:col-span-7 border-4 border-obsidian p-4 bg-creme shadow-[4px_4px_0px_#1A1A1A] flex flex-col h-[320px]">
                <h3 className="font-anton text-lg uppercase border-b-2 border-obsidian pb-1 mb-2 tracking-wide text-obsidian">📻 RELATO DOS ALTO-FALANTES</h3>
                <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-1.5 font-mono text-xs">
                    {gameLog.map((log, i) => (
                        <p key={i} className={`p-1 border-b border-stone-300/60 leading-relaxed ${log.includes('⚽') ? 'bg-green-100 border-l-4 border-l-green-600 font-bold px-2' : ''}`}>
                            {log}
                        </p>
                    ))}
                    <div ref={logEndRef} />
                </div>
            </div>

            {/* PAINEL DE ARTILHARIA E RESUMO DA TRANSMISSÃO */}
            <div className="md:col-span-5 border-4 border-obsidian p-4 bg-white shadow-[4px_4px_0px_#1A1A1A] flex flex-col justify-between h-[320px]">
                <div>
                    <h3 className="font-anton text-lg uppercase border-b-2 border-obsidian pb-1 mb-3 text-obsidian">📋 EVENTOS DA PARTIDA</h3>
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs overflow-y-auto max-h-[180px]">
                        <div>
                            <p className="font-bold border-b border-obsidian text-[10px] uppercase text-stone-500 mb-1">⚽ {userTeamName}</p>
                            {activeEvents.userGoals.map((g, i) => (
                                <div key={i} className="mb-0.5">⏱️ {g.min}' - <span className="font-bold text-obsidian">{g.name.split(' ')[0]}</span></div>
                            ))}
                        </div>
                        <div>
                            <p className="font-bold border-b border-obsidian text-[10px] uppercase text-stone-500 mb-1">⚽ {opponent.name}</p>
                            {activeEvents.oppGoals.map((g, i) => (
                                <div key={i} className="mb-0.5">⏱️ {g.min}' - <span className="font-bold text-retroRed">{g.name.split(' ')[0]}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                {matchPhase === 'FINISHED' && (
                    <button 
                        onClick={() => onMatchFinished({ scoreUser, scoreOpp, activeEvents, penUserScore, penOppScore })}
                        className="w-full bg-retroGold text-black font-anton text-lg uppercase py-3 border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-amber-400 active:translate-y-0.5 transition-all mt-2"
                    >
                        🏆 Sair de Campo e Avançar
                    </button>
                )}
            </div>

            {/* MÓDULO INTERATIVO DE PÊNALTIS SE HOUVER EMPATE */}
            {matchPhase === 'PENALTIES' && (
                <div className="md:col-span-12 border-4 border-dashed border-retroRed p-4 bg-[#FFF5F5] shadow-[6px_6px_0px_#1A1A1A] text-center mt-2 animate-fadeIn">
                    <h3 className="font-anton text-2xl text-retroRed uppercase tracking-widest mb-1">🧤 DISPUTA DE PÊNALTIS MANUAL</h3>
                    <p className="font-serif italic text-xs text-stone-600 mb-4">{penMessage}</p>

                    {/* Histórico das Cobranças Atuais */}
                    <div className="flex justify-center items-center gap-4 mb-6 font-mono text-xs">
                        <div className="bg-white border border-obsidian p-2 rounded shadow-sm">
                            <span className="font-bold block text-[10px] uppercase text-stone-500">{userTeamName}</span>
                            <span className="font-anton text-xl text-black">{penUserScore}</span>
                        </div>
                        <div className="font-anton text-xl text-stone-400">vs</div>
                        <div className="bg-white border border-obsidian p-2 rounded shadow-sm">
                            <span className="font-bold block text-[10px] uppercase text-stone-500">{opponent.name}</span>
                            <span className="font-anton text-xl text-retroRed">{penOppScore}</span>
                        </div>
                    </div>

                    {/* Interface de Tomada de Decisão */}
                    <div className="border-4 border-obsidian bg-pitchGreen p-6 max-w-md mx-auto rounded shadow-inner relative overflow-hidden">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase text-white/60 font-bold tracking-widest">
                            {penTurn === 'USER_SHOOT' ? '⚽ SEU CHUTE: Escolha o Canto' : '🧤 SUA DEFESA: Escolha o Voo'}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            <button 
                                onClick={() => handlePenaltyChoice('ESQUERDA')}
                                className="bg-creme hover:bg-stone-100 font-anton text-sm uppercase p-3 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all"
                            >
                                ↖️ Esquerda
                            </button>
                            <button 
                                onClick={() => handlePenaltyChoice('CENTRO')}
                                className="bg-creme hover:bg-stone-100 font-anton text-sm uppercase p-3 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all"
                            >
                                ⬆️ Centro
                            </button>
                            <button 
                                onClick={() => handlePenaltyChoice('DIREITA')}
                                className="bg-creme hover:bg-stone-100 font-anton text-sm uppercase p-3 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all"
                            >
                                ↗️ Direita
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
