const app = {
    estadoAtivo: null,
};

const painelInfo = document.getElementById("conteudo-info");
const botaoVoltar = document.getElementById("voltar");
const main = document.querySelector("main");

let svg = null;

// dadosEstados vem do dados.js

function getEstadoById(id) {
    return dadosEstados[id] ?? null;
}

function renderizarPainelInfo(estado) {

    // 1. Limpa o painel antes de começar para evitar lixo visual
    painelInfo.innerHTML = "";

    // 2. Tratamento da Região para o CSS
    const regiaoClasse = estado.regiao ? estado.regiao.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-') : "geral";

    // 3. Construção do HTML com verificação rigorosa das listas
    const htmlCidades = (estado.cidades && Array.isArray(estado.cidades)) 
        ? estado.cidades.map(item => `<span class="tag">${item}</span>`).join('') 
        : '<span class="tag">Dados não disponíveis</span>';

    const htmlTurismo = (estado.turismo && Array.isArray(estado.turismo)) 
        ? estado.turismo.map(item => `<span class="tag tag-turismo">${item}</span>`).join('') 
        : '<span class="tag">Dados não disponíveis</span>';

    // 4. Injeção do HTML no painel
    painelInfo.innerHTML = `
        <div class="painel-header">
            <h2>${estado.nome}</h2>
            <span class="regiao-tag regiao-${regiaoClasse}">${estado.regiao}</span>
        </div>
        
        <div class="estados-dados">
            <div class="meta-row">
                <div class="meta-item">
                    <span class="meta-label">Capital</span>
                    <span class="meta-value">${estado.capital || "---"}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">População</span>
                    <span class="meta-value">${estado.populacao || "---"}</span>
                </div>
            </div>

            <div class="meta-row">
                <div class="meta-item">
                    <span class="meta-label">Área</span>
                    <span class="meta-value">${estado.area || "---"}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">PIB</span>
                    <span class="meta-value">${estado.pib || "---"}</span>
                </div>
            </div>

            <div class="lista-secao">
                <h3>Principais Cidades</h3>
                <div class="tag-container">${htmlCidades}</div>
            </div>

            <div class="lista-secao secao-turismo">
                <h3>Atrações Turísticas</h3>
                <div class="tag-container">${htmlTurismo}</div>
            </div>
        </div>
    `;
}

function animarViewBox(svgEl, alvo, duracao = 600) {
    const vb = svgEl.viewBox.baseVal;
    const inicio = { x: vb.x, y: vb.y, w: vb.width, h: vb.height };
    const startTime = performance.now();

    function frame(agora) {
        const t = Math.min((agora - startTime) / duracao, 1);
        const progresso = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        svgEl.setAttribute("viewBox",
            `${inicio.x + (alvo.x - inicio.x) * progresso} ` +
            `${inicio.y + (alvo.y - inicio.y) * progresso} ` +
            `${inicio.w + (alvo.w - inicio.w) * progresso} ` +
            `${inicio.h + (alvo.h - inicio.h) * progresso}`
        );

        if (progresso < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

function focarEstado(grupoSvg) {
    requestAnimationFrame(() => {
    const box = grupoSvg.getBBox();

    const padding = 60;

    const x = box.x - padding;
    const y = box.y - padding;

    const w = box.width + padding * 2;
    const h = box.height + padding * 2;

    animarViewBox(svg, {
        x: x,
        y: y,
        w: w,
        h: h
    });
    });
}

function selecionarEstado(grupoSvg) {
    const estado = getEstadoById(grupoSvg.id);

    if (!estado) {
        painelInfo.innerHTML = "<p>Estado não encontrado!</p>";
        return;
    }

    app.estadoAtivo = grupoSvg.id;

    const estados = document.querySelectorAll("svg g[id^='BR']");

    estados.forEach(g =>{
        if (g === grupoSvg){
            g.classList.add("ativo");
        }else {
            g.classList.add("inativo");
        }

    });

    renderizarPainelInfo(estado);
    focarEstado(grupoSvg);
    main.classList.add("ativo");
}

function resetMapa() {
    if (!svg) return;

    animarViewBox(svg, { x: 0, y: 0, w: 612.51611, h: 639.04297 });

    const estados = document.querySelectorAll("svg g[id^='BR']");

    estados.forEach(g => {
        g.classList.remove("ativo");
        g.classList.remove("inativo");
    })

    app.estadoAtivo = null;
    main.classList.remove("ativo");

    painelInfo.innerHTML = "";
}

function initMapaEventos() {
    svg = document.querySelector("svg");

    const estadosGrupos = document.querySelectorAll('svg g[id^="BR"]');
    estadosGrupos.forEach(grupo => {
        grupo.addEventListener("click", () => {
            if (app.estadoAtivo !== null) return;
            selecionarEstado(grupo);
        });
    });
}

botaoVoltar.addEventListener("click", resetMapa);