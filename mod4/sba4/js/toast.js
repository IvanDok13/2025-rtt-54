import { els } from './dom.js';

export function toast(message) {
  const t = els.toast;
  t.textContent = message;
  t.classList.add('opacity-100');
  setTimeout(() => t.classList.remove('opacity-100'), 3000);
}
