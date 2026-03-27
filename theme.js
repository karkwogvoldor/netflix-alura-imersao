(function(){
  const storageKey = 'theme';
  const toggle = document.getElementById('theme-toggle');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  function applyTheme(theme){
    if(theme === 'light'){
      document.body.classList.add('light-theme');
      toggle.textContent = '☀️';
      toggle.setAttribute('aria-pressed','true');
      toggle.title = 'Modo claro ativado';
    } else {
      document.body.classList.remove('light-theme');
      toggle.textContent = '🌙';
      toggle.setAttribute('aria-pressed','false');
      toggle.title = 'Modo escuro ativado';
    }
  }

  // Init
  document.addEventListener('DOMContentLoaded',()=>{
    if(!toggle) return;
    // Determine initial theme: localStorage -> prefers-color-scheme -> dark
    const saved = localStorage.getItem(storageKey);
    const theme = saved || (prefersLight ? 'light' : 'dark');
    applyTheme(theme);

    toggle.addEventListener('click', ()=>{
      const isLight = document.body.classList.contains('light-theme');
      const next = isLight ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(storageKey, next);
    });
  });
})();
