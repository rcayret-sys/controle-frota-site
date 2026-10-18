/* Theme: system preference until the user explicitly selects light/dark. */
(() => {
  const storageKey = 'controle_frota_site_theme';
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (_) {}
  if (saved === 'dark' || saved === 'light') root.dataset.theme = saved;

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = () => root.dataset.theme || (mq.matches ? 'dark' : 'light');

  function updateButton() {
    const btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    const dark = currentTheme() === 'dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    btn.title = dark ? 'Ativar tema claro' : 'Ativar tema escuro';
    const icon = btn.querySelector('.theme-icon');
    const label = btn.querySelector('.theme-label');
    if (icon) icon.textContent = dark ? '☀' : '☾';
    if (label) label.textContent = dark ? 'Claro' : 'Escuro';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) btn.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem(storageKey, next); } catch (_) {}
      updateButton();
    });
    updateButton();
  });
  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', () => { if (!root.dataset.theme) updateButton(); });
  }
})();
