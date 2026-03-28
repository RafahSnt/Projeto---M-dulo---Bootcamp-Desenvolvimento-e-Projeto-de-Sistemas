/**
 * render.js — Funções de renderização (funcionais e puras)
 *
 * Cada função recebe dados e devolve uma string HTML.
 * Nenhuma delas acessa o DOM, variáveis globais externas
 * ou produz efeitos colaterais — são funções puras.
 *
 * Dependências (carregadas antes via <script>):
 *   - ICONS  (icons.js)
 */

/**
 * Renderiza o cabeçalho com logotipo, nome e tagline da marca.
 * @param {{ name: string, tagline: string }} brand
 * @returns {string} HTML
 */
const renderBrand = ({ name, tagline }) => `
  <div class="brand">
    <div class="brand__ring">
      <svg viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    </div>
    <h1 class="brand__name">${name}</h1>
    <p class="brand__tagline">${tagline}</p>
  </div>`;

/**
 * Renderiza o ícone de um botão buscando pelo iconKey no mapa ICONS.
 * @param {string} iconKey
 * @returns {string} HTML
 */
const renderButtonIcon = (iconKey) => `
  <div class="btn__icon">
    ${ICONS[iconKey]()}
  </div>`;

/**
 * Renderiza o bloco de texto de um botão (label + subtítulo).
 * @param {{ label: string, sub: string }} btn
 * @returns {string} HTML
 */
const renderButtonBody = ({ label, sub }) => `
  <div class="btn__body">
    <span class="btn__label">${label}</span>
    <span class="btn__sub">${sub}</span>
  </div>`;

/**
 * Renderiza um botão completo (ícone + texto + seta).
 * @param {{ modifier: string, url: string, label: string, iconKey: string, sub: string }} btn
 * @returns {string} HTML
 */
const renderButton = (btn) => `
  <a class="btn btn--${btn.modifier}"
     href="${btn.url}"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="${btn.label}">
    ${renderButtonIcon(btn.iconKey)}
    ${renderButtonBody(btn)}
    <span class="btn__arrow" aria-hidden="true">›</span>
  </a>`;

/**
 * Renderiza a lista de botões de navegação.
 * Usa Array.map para transformar cada item em HTML e join para concatenar.
 * @param {ReadonlyArray<object>} buttons
 * @returns {string} HTML
 */
const renderButtonList = (buttons) => `
  <nav class="btn-list" aria-label="Links da loja">
    ${buttons.map(renderButton).join('')}
  </nav>`;

/**
 * Renderiza o rodapé com o ano informado.
 * @param {number} year
 * @returns {string} HTML
 */
const renderFooter = (year) => `
  <p class="footer">© ${year} Minha Loja</p>`;

/**
 * Compõe a página completa combinando todas as partes.
 * @param {{ name: string, tagline: string }} brand
 * @param {ReadonlyArray<object>} buttons
 * @param {number} year
 * @returns {string} HTML
 */
const renderApp = (brand, buttons, year) =>
  renderBrand(brand) +
  renderButtonList(buttons) +
  renderFooter(year);
