(() => {
  const supported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  document.querySelectorAll('.audio-controls').forEach(controls => {
    const play = controls.querySelector('[data-speak]');
    const stop = controls.querySelector('[data-stop-speaking]');
    const status = controls.nextElementSibling;
    if (!play || !stop || !status) return;
    if (!supported) {
      play.disabled = stop.disabled = true;
      status.textContent = 'A leitura em voz alta não está disponível neste navegador.';
      return;
    }
    play.addEventListener('click', () => {
      const targets = [...document.querySelectorAll(play.dataset.speak)];
      const text = targets.map(target => {
        const copy = target.cloneNode(true);
        copy.querySelectorAll('.audio-controls, .audio-status').forEach(node => node.remove());
        return copy.innerText.trim();
      }).filter(Boolean).join('. ');
      if (!text) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.onstart = () => { status.textContent = 'Leitura em voz alta em andamento.'; };
      utterance.onend = () => { status.textContent = 'Leitura concluída.'; };
      utterance.onerror = () => { status.textContent = 'Não foi possível reproduzir a leitura.'; };
      window.speechSynthesis.speak(utterance);
    });
    stop.addEventListener('click', () => {
      window.speechSynthesis.cancel();
      status.textContent = 'Leitura interrompida.';
    });
  });
})();
