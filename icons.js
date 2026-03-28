/**
 * icons.js — Biblioteca de ícones SVG
 *
 * Cada ícone é uma função pura que retorna uma string SVG.
 * Para adicionar um novo ícone:
 *   1. Crie uma função seguindo o mesmo padrão abaixo
 *   2. Registre-a no objeto ICONS com uma chave única
 *   3. Use essa chave no campo `iconKey` em data.js
 */

const iconCart = () => `
  <svg viewBox="0 0 24 24">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>`;

const iconInstagram = () => `
  <svg viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>`;

const iconPin = () => `
  <svg viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`;

const iconSobre = () => `
  <svg viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`;

/** Mapa de chave → função de ícone. Imutável. */
const ICONS = Object.freeze({
  cart:      iconCart,
  instagram: iconInstagram,
  pin:       iconPin,
  sobre:     iconSobre,
});
