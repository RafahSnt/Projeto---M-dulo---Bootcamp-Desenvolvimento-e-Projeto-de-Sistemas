import { BRAND, BUTTONS } from './data.js';
import { renderApp } from './render.js';

const currentYear = () => new Date().getFullYear();

const mount = (selector) => (html) => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
};

mount('#app')(
  renderApp(BRAND, BUTTONS, currentYear())
);
