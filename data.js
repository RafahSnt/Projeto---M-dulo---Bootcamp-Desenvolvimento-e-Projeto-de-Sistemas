/**
 * data.js — Configuração da loja
 *
 * Este é o único arquivo que você precisa editar para personalizar
 * o nome da loja, os links e os botões exibidos na página.
 *
 * Todos os objetos são imutáveis (Object.freeze) para evitar
 * alterações acidentais em tempo de execução.
 */

const BRAND = Object.freeze({
  name:    'Minha Loja',
  tagline: 'Conecte-se conosco',
});

/**
 * Cada botão aceita:
 * @property {string} modifier  — variante de cor: 'gold' | 'pink' | 'teal' | 'blue'
 * @property {string} label     — texto principal do botão
 * @property {string} sub       — subtítulo do botão
 * @property {string} url       — link de destino (abre em nova aba)
 * @property {string} iconKey   — chave do ícone definida em icons.js
 */
const BUTTONS = Object.freeze([
  Object.freeze({
    modifier: 'gold',
    label:    'Loja Online',
    sub:      'Compre agora',
    url:      'https://www.sualoja.com.br',
    iconKey:  'cart',
  }),
  Object.freeze({
    modifier: 'pink',
    label:    'Instagram',
    sub:      'Siga nossas novidades',
    url:      'https://www.instagram.com/rafael_f.snt/',
    iconKey:  'instagram',
  }),
  Object.freeze({
    modifier: 'teal',
    label:    'Localização da Loja',
    sub:      'Ver no mapa',
    url:      'https://www.google.com/maps/search/?api=1&query=Rua+%C3%82ngelo+Lazari%2C+32%2C+Len%C3%A7%C3%B3is+Paulista%2C+S%C3%A3o+Paulo',
    iconKey:  'pin',
  }),
  Object.freeze({
    modifier: 'blue',
    label:    'Sobre Nós',
    sub:      'Conheça nossa história',
    url:      'https://www.sualoja.com.br/sobre',
    iconKey:  'sobre',
  }),
]);
