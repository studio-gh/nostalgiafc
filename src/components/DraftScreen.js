import React, { useState, useMemo } from 'react';

export default function DraftScreen({ draftedTeam, onRecruit, formation, modoManager }) {
    const [selectedDraftPlayer, setSelectedDraftPlayer] = useState(null);

    const getCompatibleSlots = (player) => {
        if (!player) return [];
        return formation.slots
            .map((slot, idx) => ({ ...slot, originalIndex: idx }))
            .filter(slot => draftedTeam[slot.originalIndex] === null && slot.pos === player.pos);
    };

    const slotsCompativeis = useMemo(() => getCompatibleSlots(selectedDraftPlayer), [selectedDraftPlayer, draftedTeam, formation]);

  const handlePlayerCardClick = (player) => {
  // 1. Validação de segurança: se o jogador já estiver no elenco, não faz nada
  if (draftedTeam.find(p => p.id === player.id)) return;

  // 2. Define o jogador como selecionado para disparar o efeito de destaque no campo
  setSelectedDraftPlayer(player);

  // 3. REMOVA qualquer alert() daqui! 
  // O fluxo de destaque visual (piscar slots) já deve estar ocorrendo pelo estado setado acima.
  console.log("Jogador selecionado, aguardando clique no slot:", player.nome);
};

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Renderização da Pool de Jogadores (exemplo simplificado) */}
            <div className="flex flex-wrap gap-2">
                {/* Aqui vai o mapeamento do seu time sorteado */}
            </div>

            {/* Campo Tático */}
            <div className="relative">
                {formation.slots.map((slot, idx) => {
                    const isCompativel = slotsCompativeis.find(s => s.originalIndex === idx);
                    const player = draftedTeam[idx];

                    return (
                        <div 
                            key={idx}
                            onClick={() => {
                                if (isCompativel && selectedDraftPlayer) {
                                    onRecruit(selectedDraftPlayer, idx);
                                    setSelectedDraftPlayer(null);
                                }
                            }}
                            className={`transition-all ${isCompativel ? 'bg-yellow-300 animate-pulse scale-105' : 'bg-stone-900'} ${player ? 'opacity-100' : 'opacity-80'}`}
                        >
                            {player ? player.name : slot.pos}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}