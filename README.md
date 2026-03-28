# Minha Loja — Link Page

Página de links estática para lojas, no estilo Linktree, com tema escuro e detalhes dourados.

## 📁 Estrutura do projeto

```
minha-loja/
├── index.html   # Estrutura HTML e carregamento dos scripts
├── styles.css   # Estilos e animações
├── data.js      # Configuração da loja (nome, botões, links)
├── icons.js     # Ícones SVG como funções puras
├── render.js    # Funções de renderização HTML (puras)
└── main.js      # Ponto de entrada — injeta o HTML no DOM
```

## ✏️ Como personalizar

Abra o arquivo `data.js` e edite:

- **`BRAND.name`** — nome da loja exibido na página
- **`BRAND.tagline`** — subtítulo abaixo do nome
- **`BUTTONS`** — lista de botões de link

Cada botão aceita os campos:

| Campo      | Descrição                                      | Valores possíveis             |
|------------|------------------------------------------------|-------------------------------|
| `modifier` | Variante de cor do botão                       | `gold`, `pink`, `teal`, `blue`|
| `label`    | Texto principal                                | qualquer string               |
| `sub`      | Subtítulo                                      | qualquer string               |
| `url`      | Link de destino (abre em nova aba)             | URL completa                  |
| `iconKey`  | Ícone a exibir (definido em `icons.js`)        | `cart`, `instagram`, `pin`, `sobre` |

## ➕ Como adicionar um novo botão

1. Em `icons.js`, crie uma função SVG e registre-a no objeto `ICONS`
2. Em `data.js`, adicione um novo objeto ao array `BUTTONS`

## 🚀 Como usar

Por ser um projeto estático (sem dependências de build), basta:

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/minha-loja.git

# Abrir no navegador
open index.html
```

Ou hospedar diretamente no **GitHub Pages**:

1. Vá em `Settings > Pages` no seu repositório
2. Selecione a branch `main` e a pasta `/ (root)`
3. Salve — sua página estará disponível em `https://seu-usuario.github.io/minha-loja`

## 🏗️ Arquitetura

O projeto segue o padrão **functional core / imperative shell**:

- `data.js`, `icons.js` e `render.js` são **puramente funcionais** — sem efeitos colaterais, sem acesso ao DOM
- `main.js` é o único ponto que toca o DOM, mantendo os efeitos colaterais isolados e previsíveis
