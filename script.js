const app = {
    estadoAtivo: null,
};

const svg = document.querySelector("svg");
const main = document.querySelector("main");
const estadosSvg = document.querySelectorAll("svg path");
const painelInfo = document.getElementById("conteudo-info");
const botaoVoltar = document.getElementById("voltar");

function getEstadoById(id) {
    return dadosEstados[id] ?? null;
}

function renderizarPainelInfo(estado) {
    painelInfo.innerHTML = `
        <h2>${estado.nome}</h2>
        <p><strong>Região:</strong> ${estado.regiao}</p>
        <p><strong>Cidades:</strong> ${estado.cidades.join(", ")}</p>
        <p><strong>Atrações Turísticas:</strong> ${estado.turismo.join(", ")}</p>
    `;
}

function focarEstado(elementoSvg) {
    const box = elementoSvg.getBBox();
    const padding = 5;

    const alvo = {
         x: box.x - padding,
         y: box.y - padding,
         w: box.width + 2 * padding,
         h: box.height + 2 * padding
    }
    animarViewBox(svg, alvo);
}

function selecionarEstado(elementoSvg){
    const estado =  getEstadoById(elementoSvg.id);

    if (!estado){
        painelInfo.innerHTML = "<p>Estado nao encontrado!!</p>"
        return;
    }

    app.estadoAtivo = elementoSvg.id;

    renderizarPainelInfo(estado);
    focarEstado(elementoSvg);

    main.classList.add("ativo");
}

function resetMapa() {
    svg.setAttribute("viewBox", "0 0 1000 912");
    app.estadoAtivo = null;
    main.classList.remove("ativo");
    painelInfo.innerHTML = "<p>Selecione um estado para ver as informações.</p>";
}

estadosSvg.forEach(estado => {
    estado.addEventListener("click", () => {
        if (app.estadoAtivo !== null)return; 
        selecionarEstado(estado);
    
});
});

botaoVoltar.addEventListener("click", resetMapa);

function animarViewBox(svgEl, alvo, duracao = 600){
    const vb = svgEl.viewBox.baseVal;
    const inicio = { x: vb.x, y: vb.y, w: vb.width, h: vb.height };

    const startTime = performance.now();

    function frame(agora){
        const t = Math.min((agora - startTime) / duracao, 1);
        const progresso = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const x = inicio.x + (alvo.x - inicio.x) * progresso;
        const y = inicio.y + (alvo.y - inicio.y) * progresso;
        const w = inicio.w + (alvo.w - inicio.w) * progresso;
        const h = inicio.h + (alvo.h - inicio.h) * progresso;

        svgEl.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);

        if (progresso < 1 ) requestAnimationFrame(frame);
        
    }
    requestAnimationFrame(frame);
}



