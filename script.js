let estadoAtivo = null;
const dadosEstados = {
    BRPR: {
        nome: "Paraná",
        regiao: "Sul",
        cidades: ["Curitiba", "Londrina", "Maringá"],
        turismo: ["Parque Barigui", "Jardim Botânico de Curitiba"]
    },

    BRSC: {
        nome: "Santa Catarina",
        regiao: "Sul",
        cidades: ["Florianópolis", "Joinville", "Blumenau"],
        turismo: ["Praia de Jurerê", "Parque Beto Carrero World"]
    },
    BRRS: {
        nome: "Rio Grande do Sul",
        regiao: "Sul",
        cidades: ["Porto Alegre", "Caxias do Sul", "Pelotas"],
        turismo: ["Cidade Baixa", "Parque das Aves"]
    },
    BRSP: {
        nome: "São Paulo",
        regiao: "Sudeste",
        cidades: ["São Paulo", "Campinas", "Santos"],
        turismo: ["Avenida Paulista", "Parque Ibirapuera"]
    },
    BRRJ: {
        nome: "Rio de Janeiro",
        regiao: "Sudeste",
        cidades: ["Rio de Janeiro", "Niterói", "Petrópolis"],
        turismo: ["Cristo Redentor", "Pão de Açúcar"]
    },
    BRMG: {
        nome: "Minas Gerais",
        regiao: "Sudeste",
        cidades: ["Belo Horizonte", "Uberlândia", "Ouro Preto"],
        turismo: ["Inhotim", "Parque Nacional da Serra do Cipó"]
    },
    BRES: {
        nome: "Espírito Santo",
        regiao: "Sudeste",
        cidades: ["Vitória", "Vila Velha", "Guarapari"],
        turismo: ["Praia de Camburi", "Convento da Penha"]
    },
    BRMT: {
        nome: "Mato Grosso",
        regiao: "Centro-Oeste",
        cidades: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        turismo: ["Chapada dos Guimarães", "Pantanal"]
    },
    BRGO: {
        nome: "Goiás",
        regiao: "Centro-Oeste",
        cidades: ["Goiânia", "Anápolis", "Aparecida de Goiânia"],
        turismo: ["Parque Nacional da Chapada dos Veadeiros", "Cidade de Goiás"]
    },
    BRDF: {
        nome: "Distrito Federal",
        regiao: "Centro-Oeste",
        cidades: ["Brasília", "Taguatinga", "Ceilândia"],
        turismo: ["Esplanada dos Ministérios", "Parque da Cidade"]
    },
    BRMS: {
        nome: "Mato Grosso do Sul",
        regiao: "Centro-Oeste",
        cidades: ["Campo Grande", "Dourados", "Ponta Porã"],
        turismo: ["Parque Nacional do Iguaçu", "Cidade de Dourados"]
    },
    BRAM: {
        nome: "Amazonas",
        regiao: "Norte",
        cidades: ["Manaus", "Parintins", "Itacoatiara"],
        turismo: ["Encontro das Águas", "Teatro Amazonas"]
    },
    BRPA: {
        nome: "Pará",
        regiao: "Norte",
        cidades: ["Belém", "Marabá", "Castanhal"],
        turismo: ["Praia de Itaúna", "Parque do Piquiá"]
    },
    BRRO: {
        nome: "Rondônia",
        regiao: "Norte",
        cidades: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        turismo: ["Parque Natural de Porto Velho", "Lagoa do Amor"] 
    },
    BRAC: {
        nome: "Acre",
        regiao: "Norte",
        cidades: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        turismo: ["Parque Nacional da Serra do Divisor", "Museu da Borracha"]
    },
    BRTO: {
        nome: "Tocantins",
        regiao: "Norte",
        cidades: ["Palmas", "Araguaína", "Gurupi"],
        turismo: ["Jalapão", "Praia da Graciosa"]
    },
    BRAP: {
        nome: "Amapá",
        regiao: "Norte",
        cidades: ["Macapá", "Santana", "Laranjal do Jari"],
        turismo: ["Marco Zero do Equador", "Parque Nacional do Tumucumaque"]
    },
    BRRR: {
        nome: "Roraima",
        regiao: "Norte",
        cidades: ["Boa Vista", "Rorainópolis", "Mucajaí"],
        turismo: ["Monte Roraima", "Parque Nacional do Viruá"]
    },
    BRBA: {
        nome: "Bahia",
        regiao: "Nordeste",
        cidades: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
        turismo: ["Pelourinho", "Chapada Diamantina"]
    },
    BRPE: {
        nome: "Pernambuco",
        regiao: "Nordeste",
        cidades: ["Recife", "Olinda", "Jaboatão dos Guararapes"],
        turismo: ["Praia de Boa Viagem", "Instituto Ricardo Brennand"]
    },
    BRCE: {
        nome: "Ceará",
        regiao: "Nordeste",
        cidades: ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
        turismo: ["Beach Park", "Canoa Quebrada"]
    },
    BRRN: {
        nome: "Rio Grande do Norte",
        regiao: "Nordeste",
        cidades: ["Natal", "Mossoró", "Parnamirim"],
        turismo: ["Praia de Ponta Negra", "Genipabu"]
    },
    BRPB: {
        nome: "Paraíba",
        regiao: "Nordeste",
        cidades: ["João Pessoa", "Campina Grande", "Santa Rita"],
        turismo: ["Praia de Itaúna", "Parque do Piquiá"]
    },
    BRSE: { 
        nome: "Sergipe",
        regiao: "Nordeste",
        cidades: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        turismo: ["Orla de Atalaia", "Cânion do Xingó"]
    },
    BRAL: {
        nome: "Alagoas",
        regiao: "Nordeste",
        cidades: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
        turismo: ["Praia do Francês", "Piscinas Naturais de Pajuçara"]
    },
    BRMA: {
        nome: "Maranhão",
        regiao: "Nordeste",
        cidades: ["São Luís", "Imperatriz", "Timon"],
        turismo: ["Lençóis Maranhenses", "Centro Histórico de São Luís"]
    },
    BRPI: {
        nome: "Piauí",
        regiao: "Nordeste",
        cidades: ["Teresina", "Parnaíba", "Picos"],
        turismo: ["Parque Nacional da Serra da Capivara", "Delta do Parnaíba"]
    },

};
const estadosSvg = document.querySelectorAll("svg path");
const painelInfo = document.getElementById("conteudo-info");

function mostrarEstado(id) {
    const estado = dadosEstados[id];

    if (!estado) {
        painelInfo.innerHTML = "<h2>Estado não encontrado</h2>";
        return;
    }

    painelInfo.innerHTML = `
        <h2>${estado.nome} </h2>
        <p><strong>Região:</strong> ${estado.regiao}</p>
        <p><strong>Cidades principais:</strong> ${estado.cidades.join(", ")}</p>
        <p><strong>Pontos turísticos:</strong> ${estado.turismo.join(", ")}</p>
       
    `;
}

function focarEstado(estado) {
    const box = estado.getBBox();
    const svg = document.querySelector("svg");
    const svgPath = document.querySelector("svg path");

    const padding = 5;

    const x = box.x - padding;
    const y = box.y - padding;
    const width = box.width + padding * 2;
    const height = box.height + padding * 2;

    svg.setAttribute(
        "viewBox",
        `${x} ${y} ${width} ${height}`
    );
}


estadosSvg.forEach(estado => {
    estado.addEventListener("click", () => {
        if (estadoAtivo !== null) return;

        estadoAtivo = estado.id;
        mostrarEstado(estado.id);
        focarEstado(estado);
        const ativado = document.querySelector("main").classList.add("ativo");
    });
});

function resetMapa() {
    const svg = document.querySelector("svg");
    svg.setAttribute("viewBox", "0 0 1000 912");
    estadoAtivo = null;
    document.querySelector("main").classList.remove("ativo");
    painelInfo.innerHTML = "<p>Clique em um estado para ver mais informações.</p>";
}

const botaoVoltar = document.getElementById("voltar");
botaoVoltar.addEventListener("click", () => {
    resetMapa();
});


