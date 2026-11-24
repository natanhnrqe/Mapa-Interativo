(() => {
  const panel = document.getElementById('conteudo-info');
  const title = document.getElementById('state-title');
  const placeholder = document.getElementById('state-placeholder');
  const select = document.getElementById('estado-select');
  const list = document.getElementById('lista-estados');
  const host = document.getElementById('mapa-container');
  const pratos = { BRAC:'Tacacá', BRAL:'Sururu', BRAP:'Camarão no bafo', BRAM:'Tambaqui assado', BRBA:'Acarajé', BRCE:'Baião de dois', BRES:'Moqueca capixaba', BRGO:'Empadão goiano', BRMA:'Arroz de cuxá', BRMT:'Maria-isabel', BRMS:'Sopa paraguaia', BRMG:'Pão de queijo', BRPA:'Açaí', BRPB:'Baião de dois', BRPE:'Bolo de rolo', BRPI:'Cajuína', BRPR:'Barreado', BRRJ:'Feijoada', BRRN:'Ginga com tapioca', BRRS:'Churrasco', BRRO:'Pirarucu', BRRR:'Damurida', BRSC:'Sequência de camarão', BRSP:'Virado à paulista', BRSE:'Caranguejada', BRTO:'Peixe na telha', BRDF:'Galinhada' };

  function addOption(id, state) {
    if (select.querySelector(`option[value="${id}"]`)) return;
    const opt = document.createElement('option'); opt.value = id; opt.textContent = state.nome; select.append(opt);
    const li = document.createElement('li'); const btn = document.createElement('button'); btn.type = 'button'; btn.textContent = state.nome; btn.addEventListener('click', () => show(id)); li.append(btn); list.append(li);
  }
  function show(id) {
    const state = dadosEstados[id]; if (!state) return;
    title.textContent = state.nome; placeholder.hidden = true; select.value = id;
    panel.replaceChildren();
    const intro = document.createElement('p'); intro.textContent = `${state.regiao} · Capital: ${state.capital}`; panel.append(intro);
    const dl = document.createElement('dl'); dl.className = 'facts';
    [['População (Censo 2022)', state.populacao], ['Área', state.area], ['Comida típica', pratos[id] || 'Consulte referências culturais locais']].forEach(([label, value]) => { const wrap = document.createElement('div'); const dt = document.createElement('dt'); dt.textContent = label; const dd = document.createElement('dd'); dd.textContent = value || 'Não informado'; wrap.append(dt, dd); dl.append(wrap); }); panel.append(dl);
    const cities = document.createElement('h3'); cities.textContent = 'Cidades em destaque'; panel.append(cities); panel.append(makeList(state.cidades));
    const tourism = document.createElement('h3'); tourism.textContent = 'Atrações'; panel.append(tourism); panel.append(makeList(state.turismo));
    const source = document.createElement('p'); source.className = 'source-note'; source.textContent = 'População: IBGE, Censo Demográfico 2022. Gastronomia e turismo são referências culturais gerais.'; panel.append(source);
  }
  function makeList(values=[]) { const ul=document.createElement('ul'); ul.className='chip-list'; values.forEach(value=>{const li=document.createElement('li');li.textContent=value;ul.append(li)}); return ul; }
  Object.entries(dadosEstados).forEach(([id,state]) => addOption(id,state));
  select.addEventListener('change', () => { if (select.value) show(select.value); });
  fetch('mapa.svg').then(response => { if(!response.ok) throw new Error(); return response.text(); }).then(markup => {
    host.innerHTML = markup; const svg=host.querySelector('svg'); if(!svg) throw new Error();
    svg.setAttribute('role','group'); svg.setAttribute('aria-labelledby','map-title map-desc');
    const ns='http://www.w3.org/2000/svg'; const st=document.createElementNS(ns,'title'); st.id='map-title'; st.textContent='Mapa do Brasil por estado'; const desc=document.createElementNS(ns,'desc'); desc.id='map-desc'; desc.textContent='Use Tab para percorrer os estados e Enter ou Espaço para consultar um.'; svg.prepend(desc); svg.prepend(st);
    Object.entries(dadosEstados).forEach(([id,state]) => { const group=svg.querySelector(`#${id}`); if(!group)return; group.setAttribute('tabindex','0'); group.setAttribute('role','button'); group.setAttribute('aria-label',`${state.nome}, ${state.regiao}`); group.addEventListener('click',()=>show(id)); group.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();show(id)}}); });
    host.setAttribute('aria-busy','false');
  }).catch(() => { host.setAttribute('aria-busy','false'); host.innerHTML='<p>O mapa não carregou. Use a lista de estados para consultar as informações.</p>'; });
})();
