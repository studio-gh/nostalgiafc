import React, { useEffect, useRef } from 'react';

/**
 * Componente: Poster (Versão V12 Oficial)
 * Renderiza um pôster editorial estilizado via Canvas HTML5 com as conquistas da campanha,
 * oferecendo download físico em PNG e compartilhamento nativo através do ecossistema Mobile.
 */
export default function Poster({
  dadosCampanha, // { timeNome: 'Meu Elenco', vitorias: 5, empates: 1, derrotas: 1, artilheiro: 'Romário', gols: 12, mvp: 'Ronaldo' }
  onVoltarMenu   // Callback para resetar o loop e voltar à tela inicial do Draft
}) {
  const canvasRef = useRef(null);

  // Efeito responsável por pintar o design editorial da revista no elemento Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // --- CONFIGURAÇÃO DE RENDERIZAÇÃO DE ALTA RESOLUÇÃO (1080x1350 - Padrão Instagram Premium) ---
    canvas.width = 1080;
    canvas.height = 1350;

    // 1. Fundo Creme-Nostalgia Têxtil (#F4F1EA)
    ctx.fillStyle = '#F4F1EA';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Moldura/Borda de Prensa Industrial (Preto Analógico)
    ctx.lineWidth = 24;
    ctx.strokeStyle = '#1A1A1A';
    ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);

    // 3. Cabeçalho Editorial: Caixa Sólida Superior
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(40, 40, canvas.width - 80, 180);

    // Texto Principal do Cabeçalho
    ctx.fillStyle = '#F4F1EA';
    ctx.textAlign = 'center';
    ctx.font = 'black italic 75px Anton, Arial Black, sans-serif'; // Fallback tático de fontes pesadas
    ctx.fillText('NOSTALGIA FC', canvas.width / 2, 125);

    ctx.fillStyle = '#F59E0B'; // Tom Âmbar Retrô
    ctx.font = 'bold uppercase font-mono 28px monospace';
    ctx.fillText('CRÓNICA E MEMÓRIA DA CAMPANHA HISTÓRICA', canvas.width / 2, 185);

    // 4. Nome do Esquadrão Customizado
    ctx.fillStyle = '#1A1A1A';
    ctx.textAlign = 'left';
    ctx.font = '900 uppercase 55px Anton, Arial Black, sans-serif';
    ctx.fillText(dadosCampanha?.timeNome?.toUpperCase() || 'MEU ESQUADRÃO LENDÁRIO', 80, 310);

    // Linha Divisória de Estilo Caderno de Desporto
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#1A1A1A';
    ctx.beginPath();
    ctx.moveTo(80, 340);
    ctx.lineTo(canvas.width - 80, 340);
    ctx.stroke();

    // 5. Bloco de Estatísticas Consolidadas da Copa
    ctx.fillStyle = '#1A1A1A';
    ctx.font = 'bold 36px monospace';
    ctx.fillText('CAMPANHA:', 80, 420);

    // Grid de Resultados Retrô
    const vit = dadosCampanha?.vitorias || 0;
    const emp = dadosCampanha?.empates || 0;
    const der = dadosCampanha?.derrotas || 0;
    
    ctx.fillStyle = '#15803D'; // Verde Editorial
    ctx.font = '900 48px Anton, Arial Black, sans-serif';
    ctx.fillText(`${vit} VITÓRIAS`, 80, 490);

    ctx.fillStyle = '#4B5563'; // Cinza Escuro
    ctx.fillText(`${emp} EMPATES`, 420, 490);

    ctx.fillStyle = '#B91C1C'; // Vermelho Clássico
    ctx.fillText(`${der} DERROTAS`, 760, 490);

    // 6. Caixa Especial do Artilheiro (Destaque da Edição)
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(80, 560, canvas.width - 160, 240);

    ctx.fillStyle = '#F4F1EA';
    ctx.font = 'bold tracking-widest 26px monospace';
    ctx.fillText('CHUTEIRA DE OURO / ARTILHEIRO:', 120, 620);
    
    ctx.fillStyle = '#F59E0B'; // Destaque Dourado para o nome
    ctx.font = '900 uppercase 58px Anton, Arial Black, sans-serif';
    ctx.fillText(dadosCampanha?.artilheiro?.toUpperCase() || 'NENHUM GOLO REGISTADO', 120, 700);

    ctx.fillStyle = '#F4F1EA';
    ctx.font = 'italic 34px Georgia, serif';
    ctx.fillText(`Fuzilou as redes adversárias com ${dadosCampanha?.gols || 0} golos anotados.`, 120, 755);

    // 7. Bloco do MVP (Melhor Jogador do Torneio)
    ctx.fillStyle = '#1A1A1A';
    ctx.font = 'bold 36px monospace';
    ctx.fillText('MELHOR JOGADOR EM CAMPO (MVP GLOBAL):', 80, 890);

    ctx.fillStyle = '#1A1A1A';
    ctx.font = '900 uppercase 52px Anton, Arial Black, sans-serif';
    ctx.fillText(dadosCampanha?.mvp?.toUpperCase() || 'EQUIPA EQUILIBRADA', 80, 960);

    ctx.fillStyle = '#6B7280';
    ctx.font = 'italic 28px Georgia, serif';
    ctx.fillText('Carregou a equipa taticamente, decidindo lances críticos na era pré-VAR.', 80, 1005);

    // 8. Selo de Autenticidade Nostálgica no Canto Inferior
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#B91C1C';
    ctx.strokeRect(80, 1080, 260, 100);
    ctx.fillStyle = '#B91C1C';
    ctx.font = '900 24px monospace';
    ctx.fillText('PRE-VAR ERA', 125, 1125);
    ctx.fillText('OFFICIAL ENGINE', 105, 1155);

    // 9. Rodapé Comercial Obrigatório (Alta Visibilidade de Marca)
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(40, 1220, canvas.width - 80, 90);

    ctx.fillStyle = '#F4F1EA';
    ctx.textAlign = 'center';
    ctx.font = '900 tracking-wider 32px Anton, Arial Black, sans-serif';
    ctx.fillText('SIGA @NOSTALGIA.F.C — JOGO ORIGINAL CONCLUÍDO', canvas.width / 2, 1275);

  }, [dadosCampanha]);

  // FUNÇÃO: Processa o download direto do arquivo de imagem PNG
  const acionarDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `nostalgia-fc-${dadosCampanha?.timeNome?.toLowerCase().replace(/\s+/g, '-') || 'campanha'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // FUNÇÃO: Integração com a API Navigator Share nativa dos smartphones
  const acionarCompartilhamentoNativo = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      // Converter o Canvas de maneira assíncrona para Blob para viabilizar envio de arquivo
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        
        const arquivo = new File([blob], 'poster-nostalgia.png', { type: 'image/png' });
        
        // Validar se o sistema atual oferece suporte para compartilhar arquivos de imagem
        if (navigator.canShare && navigator.canShare({ files: [arquivo] })) {
          await navigator.share({
            files: [arquivo],
            title: 'Minha Campanha Histórica - Nostalgia FC',
            text: `Olha o esquadrão analógico que montei no Nostalgia FC! Artilheiro: ${dadosCampanha?.artilheiro || 'Nenhum'}. Encara o desafio?`
          });
        } else {
          // Fallback para desktops ou navegadores legados sem suporte a arquivos
          alert('O compartilhamento nativo de ficheiros não é suportado pelo seu navegador atual. Use o botão "Descarregar Pôster" para salvar a imagem localmente.');
        }
      }, 'image/png');
    } catch (erro) {
      console.error('Erro ao acionar a API de compartilhamento nativo:', erro);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center bg-[#F4F1EA] border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
      
      {/* TÍTULO DA ETAPA FINAL */}
      <div className="text-center mb-6 border-b-2 border-black w-full pb-3">
        <h1 className="font-serif font-black text-2xl uppercase tracking-tight text-[#1A1A1A]">
          🏆 Galeria de Campeões / Registro Eterno
        </h1>
        <p className="font-mono text-xs text-zinc-600 mt-1">
          O Pôster oficial da sua campanha foi gerado no formato editorial de revista de banca.
        </p>
      </div>

      {/* RENDERIZADOR DO CANVAS COMPACTADO VISUALMENTE NA UI (PRESERVA A ALTA RESOLUÇÃO NA EXPORTAÇÃO) */}
      <div className="w-full max-w-[480px] bg-white border-4 border-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-sm">
        <canvas 
          ref={canvasRef} 
          className="w-full h-auto block object-contain"
          style={{ aspectRatio: '1080/1350' }}
        />
      </div>

      {/* PAINEL DE AÇÕES DE ENCERRAMENTO E EXPORTAÇÃO */}
      <div className="w-full max-w-[480px] flex flex-col gap-2 mt-6 font-mono text-xs">
        
        <div className="grid grid-cols-2 gap-2">
          {/* Ação 1: Download Físico da Mídia */}
          <button
            onClick={acionarDownloadPNG}
            className="bg-zinc-800 text-stone-100 p-3 border-2 border-black font-black uppercase tracking-tight shadow-[2px_2px_0px_0px_#000] hover:bg-zinc-700 active:translate-y-0.5 transition-all"
          >
            💾 Baixar Pôster
          </button>

          {/* Ação 2: Compartilhamento Mobile Avançado */}
          <button
            onClick={acionarCompartilhamentoNativo}
            className="bg-amber-500 text-black p-3 border-2 border-black font-black uppercase tracking-tight shadow-[2px_2px_0px_0px_#000] hover:bg-amber-400 active:translate-y-0.5 transition-all"
          >
            📢 Compartilhar
          </button>
        </div>

        {/* Botão de Encerramento: Destrói o estado e reinicia o loop do Roguelike */}
        <button
          onClick={onVoltarMenu}
          className="w-full mt-2 bg-stone-100 text-zinc-800 p-2.5 border border-zinc-400 font-bold uppercase hover:bg-zinc-200 transition-all text-center"
        >
          ↩️ Voltar ao Menu / Novo Draft
        </button>
      </div>
      
    </div>
  );
}