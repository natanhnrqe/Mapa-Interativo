# Brasil em foco — mapa interativo acessível

Site educativo em HTML, CSS e JavaScript sobre estados brasileiros e acessibilidade na vida cotidiana. O projeto tem cinco páginas conectadas: mapa, acessibilidade no cotidiano, acessibilidade na web, mobilidade e comunicação.

## Executar localmente

Como o mapa SVG é carregado com `fetch`, abra o projeto por um servidor HTTP local (por exemplo, a extensão Live Server do VS Code). Abrir `index.html` diretamente como arquivo pode impedir o carregamento do mapa.

## Publicar

O site é estático. Pode ser hospedado gratuitamente no GitHub Pages: envie os arquivos para um repositório GitHub, abra **Settings → Pages**, escolha a branch e a pasta raiz e salve. O endereço publicado aparece nessa mesma seção. Também pode ser publicado em outro serviço de hospedagem estática.

## Acessibilidade incluída

- Idioma da página declarado em português brasileiro, link para pular ao conteúdo e títulos estruturados.
- Navegação por teclado no mapa (Tab, Enter e Espaço) e alternativa por seletor/lista de estados.
- Nome acessível nos estados do SVG, foco visível, layout responsivo e suporte à preferência por movimento reduzido.
- Artigos com linguagem direta, estrutura semântica e links para fontes oficiais.

## Fontes e dados

As informações populacionais existentes no conjunto inicial de dados foram mantidas em formato resumido; consulte o IBGE para valores e atualizações oficiais. As referências dos textos temáticos estão listadas em cada página.

- [IBGE — Cidades e Estados](https://www.ibge.gov.br/cidades-e-estados.html)
- [Lei Brasileira de Inclusão — Lei nº 13.146/2015](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)
- [W3C WAI — WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
