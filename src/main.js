import App from './App.svelte';

function onOpen(e) {
  e.preventDefault();

  const app = new App({ target: document.body });

  app.$on('close', () => app.$destroy());
}

const buttons = document.querySelectorAll('.js-subscribe');
buttons.forEach(button => (button.onclick = onOpen));
