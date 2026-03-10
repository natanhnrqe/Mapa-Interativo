const dadosEstados = {
    // --- SUL ---
    BRPR: {
        nome: "Paraná",
        regiao: "Sul",
        capital: "Curitiba",
        populacao: "11,4 milhões",
        area: "199.307 km²",
        pib: "R$ 614 bilhões",
        cidades: ["Curitiba", "Londrina", "Maringá", "Foz do Iguaçu"],
        turismo: ["Cataratas do Iguaçu", "Jardim Botânico", "Ilha do Mel"]
    },
    BRSC: {
        nome: "Santa Catarina",
        regiao: "Sul",
        capital: "Florianópolis",
        populacao: "7,6 milhões",
        area: "95.730 km²",
        pib: "R$ 428 bilhões",
        cidades: ["Joinville", "Florianópolis", "Blumenau", "Balneário Camboriú"],
        turismo: ["Beto Carrero World", "Serra do Rio do Rastro", "Praia do Rosa"]
    },
    BRRS: {
        nome: "Rio Grande do Sul",
        regiao: "Sul",
        capital: "Porto Alegre",
        populacao: "10,8 milhões",
        area: "281.707 km²",
        pib: "R$ 593 bilhões",
        cidades: ["Porto Alegre", "Caxias do Sul", "Canoas", "Pelotas"],
        turismo: ["Gramado e Canela", "Vale dos Vinhedos", "Ruínas de São Miguel"]
    },

    // --- SUDESTE ---
    BRSP: {
        nome: "São Paulo",
        regiao: "Sudeste",
        capital: "São Paulo",
        populacao: "44,4 milhões",
        area: "248.219 km²",
        pib: "R$ 2,7 trilhões",
        cidades: ["São Paulo", "Campinas", "Guarulhos", "Ribeirão Preto"],
        turismo: ["Avenida Paulista", "Campos do Jordão", "Aparecida"]
    },
    BRRJ: {
        nome: "Rio de Janeiro",
        regiao: "Sudeste",
        capital: "Rio de Janeiro",
        populacao: "16,0 milhões",
        area: "43.750 km²",
        pib: "R$ 949 bilhões",
        cidades: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Niterói"],
        turismo: ["Cristo Redentor", "Pão de Açúcar", "Arraial do Cabo"]
    },
    BRMG: {
        nome: "Minas Gerais",
        regiao: "Sudeste",
        capital: "Belo Horizonte",
        populacao: "20,5 milhões",
        area: "586.521 km²",
        pib: "R$ 824 bilhões",
        cidades: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
        turismo: ["Ouro Preto", "Inhotim", "Serra da Canastra"]
    },
    BRES: {
        nome: "Espírito Santo",
        regiao: "Sudeste",
        capital: "Vitória",
        populacao: "3,8 milhões",
        area: "46.074 km²",
        pib: "R$ 163 bilhões",
        cidades: ["Serra", "Vila Velha", "Cariacica", "Vitória"],
        turismo: ["Convento da Penha", "Guarapari", "Pedra Azul"]
    },

    // --- CENTRO-OESTE ---
    BRMT: {
        nome: "Mato Grosso",
        regiao: "Centro-Oeste",
        capital: "Cuiabá",
        populacao: "3,6 milhões",
        area: "903.207 km²",
        pib: "R$ 233 bilhões",
        cidades: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        turismo: ["Chapada dos Guimarães", "Pantanal", "Nobres"]
    },
    BRMS: {
        nome: "Mato Grosso do Sul",
        regiao: "Centro-Oeste",
        capital: "Campo Grande",
        populacao: "2,7 milhões",
        area: "357.145 km²",
        pib: "R$ 142 bilhões",
        cidades: ["Campo Grande", "Dourados", "Três Lagoas"],
        turismo: ["Bonito", "Pantanal Sul", "Rota do Peixe"]
    },
    BRGO: {
        nome: "Goiás",
        regiao: "Centro-Oeste",
        capital: "Goiânia",
        populacao: "7,0 milhões",
        area: "340.203 km²",
        pib: "R$ 269 bilhões",
        cidades: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
        turismo: ["Caldas Novas", "Pirenópolis", "Chapada dos Veadeiros"]
    },
    BRDF: {
        nome: "Distrito Federal",
        regiao: "Centro-Oeste",
        capital: "Brasília",
        populacao: "2,8 milhões",
        area: "5.760 km²",
        pib: "R$ 286 bilhões",
        cidades: ["Brasília", "Taguatinga", "Ceilândia"],
        turismo: ["Congresso Nacional", "Catedral de Brasília", "Pontão do Lago Sul"]
    },

    // --- NORDESTE ---
    BRBA: {
        nome: "Bahia",
        regiao: "Nordeste",
        capital: "Salvador",
        populacao: "14,1 milhões",
        area: "564.720 km²",
        pib: "R$ 352 bilhões",
        cidades: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
        turismo: ["Pelourinho", "Porto Seguro", "Chapada Diamantina"]
    },
    BRPE: {
        nome: "Pernambuco",
        regiao: "Nordeste",
        capital: "Recife",
        populacao: "9,0 milhões",
        area: "98.067 km²",
        pib: "R$ 220 bilhões",
        cidades: ["Recife", "Jaboatão dos Guararapes", "Olinda"],
        turismo: ["Fernando de Noronha", "Porto de Galinhas", "Olinda"]
    },
    BRCE: {
        nome: "Ceará",
        regiao: "Nordeste",
        capital: "Fortaleza",
        populacao: "8,8 milhões",
        area: "148.894 km²",
        pib: "R$ 194 bilhões",
        cidades: ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
        turismo: ["Jericoacoara", "Canoa Quebrada", "Beach Park"]
    },
    BRMA: {
        nome: "Maranhão",
        regiao: "Nordeste",
        capital: "São Luís",
        populacao: "6,7 milhões",
        area: "329.642 km²",
        pib: "R$ 124 bilhões",
        cidades: ["São Luís", "Imperatriz", "Timon"],
        turismo: ["Lençóis Maranhenses", "Centro Histórico de São Luís"]
    },
    BRRN: {
        nome: "Rio Grande do Norte",
        regiao: "Nordeste",
        capital: "Natal",
        populacao: "3,3 milhões",
        area: "52.809 km²",
        pib: "R$ 71 bilhões",
        cidades: ["Natal", "Mossoró", "Parnamirim"],
        turismo: ["Praia de Ponta Negra", "Pipa", "Dunas de Genipabu"]
    },
    BRPB: {
        nome: "Paraíba",
        regiao: "Nordeste",
        capital: "João Pessoa",
        populacao: "3,9 milhões",
        area: "56.467 km²",
        pib: "R$ 77 bilhões",
        cidades: ["João Pessoa", "Campina Grande", "Santa Rita"],
        turismo: ["Ponta do Seixas", "Tambaba", "Campina Grande (São João)"]
    },
    BRAL: {
        nome: "Alagoas",
        regiao: "Nordeste",
        capital: "Maceió",
        populacao: "3,1 milhões",
        area: "27.843 km²",
        pib: "R$ 76 bilhões",
        cidades: ["Maceió", "Arapiraca", "Rio Largo"],
        turismo: ["Maragogi", "Praia do Francês", "Cânion do São Francisco"]
    },
    BRSE: {
        nome: "Sergipe",
        regiao: "Nordeste",
        capital: "Aracaju",
        populacao: "2,2 milhões",
        area: "21.925 km²",
        pib: "R$ 51 bilhões",
        cidades: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        turismo: ["Orla de Atalaia", "Cânion do Xingó", "São Cristóvão"]
    },
    BRPI: {
        nome: "Piauí",
        regiao: "Nordeste",
        capital: "Teresina",
        populacao: "3,2 milhões",
        area: "251.756 km²",
        pib: "R$ 64 bilhões",
        cidades: ["Teresina", "Parnaíba", "Picos"],
        turismo: ["Serra da Capivara", "Delta do Parnaíba"]
    },

    // --- NORTE ---
    BRAM: {
        nome: "Amazonas",
        regiao: "Norte",
        capital: "Manaus",
        populacao: "3,9 milhões",
        area: "1.559.146 km²",
        pib: "R$ 131 bilhões",
        cidades: ["Manaus", "Parintins", "Itacoatiara"],
        turismo: ["Teatro Amazonas", "Encontro das Águas", "Anavilhanas"]
    },
    BRPA: {
        nome: "Pará",
        regiao: "Norte",
        capital: "Belém",
        populacao: "8,1 milhões",
        area: "1.245.870 km²",
        pib: "R$ 262 bilhões",
        cidades: ["Belém", "Ananindeua", "Santarém"],
        turismo: ["Ilha de Marajó", "Alter do Chão", "Círio de Nazaré"]
    },
    BRRO: {
        nome: "Rondônia",
        regiao: "Norte",
        capital: "Porto Velho",
        populacao: "1,5 milhão",
        area: "237.576 km²",
        pib: "R$ 58 bilhões",
        cidades: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        turismo: ["Estrada de Ferro Madeira-Mamoré", "Vale do Guaporé"]
    },
    BRAC: {
        nome: "Acre",
        regiao: "Norte",
        capital: "Rio Branco",
        populacao: "830 mil",
        area: "164.123 km²",
        pib: "R$ 21 bilhões",
        cidades: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        turismo: ["Parque Ambiental Chico Mendes", "Geoglifos"]
    },
    BRRR: {
        nome: "Roraima",
        regiao: "Norte",
        capital: "Boa Vista",
        populacao: "636 mil",
        area: "224.273 km²",
        pib: "R$ 18 bilhões",
        cidades: ["Boa Vista", "Rorainópolis", "Caracaraí"],
        turismo: ["Monte Roraima", "Rio Branco"]
    },
    BRAP: {
        nome: "Amapá",
        regiao: "Norte",
        capital: "Macapá",
        populacao: "733 mil",
        area: "142.470 km²",
        pib: "R$ 18 bilhões",
        cidades: ["Macapá", "Santana", "Laranjal do Jari"],
        turismo: ["Fortaleza de São José", "Marco Zero"]
    },
    BRTO: {
        nome: "Tocantins",
        regiao: "Norte",
        capital: "Palmas",
        populacao: "1,5 milhão",
        area: "277.466 km²",
        pib: "R$ 51 bilhões",
        cidades: ["Palmas", "Araguaína", "Gurupi"],
        turismo: ["Jalapão", "Ilha do Bananal"]
    }
};