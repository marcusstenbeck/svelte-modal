// This imports the modal app. It's written in the framework Svelte.
// Hopefully it's pretty easy to understand. They have good docs, so
// take a look at their website.
//
// This example is based on their modal example
import App from './App.svelte';

// This function creates and attaches a modal
function onOpen(e) {
  // This stops the default behavior of the click
  e.preventDefault();

  // This creates a new modal app and attaches it to the HTML body
  const app = new App({ target: document.body });

  // This destroys the app when the "close" event happens
  app.$on('close', () => app.$destroy());
}

// This will select all elements with the "js-subscribe" class
const buttons = document.querySelectorAll('.js-subscribe');
// and add the handler that will open a modal
buttons.forEach(button => (button.onclick = onOpen));
