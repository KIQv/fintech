// js/themeChange.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
  
    // Função para aplicar o tema com base no localStorage
    function applyTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  
    // Chame a função ao carregar a página
    applyTheme();
  
    // Adicione o evento de clique para alternar o tema
    button.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });
  });
  