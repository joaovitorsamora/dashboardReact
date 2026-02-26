# 🚀 Dashboard de Criptomoedas com React, TypeScript e Vite

Este projeto é um dashboard interativo para visualização de dados de criptomoedas (BTC, ETH, LTC) em tempo real, utilizando gráficos dinâmicos. Ele consome a API da Alpha Vantage para exibir as taxas de câmbio das principais criptomoedas em relação ao Euro, apresentando os dados em diferentes tipos de gráficos.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **React** (com TypeScript) — construção da interface e componentes
- **Vite** — ferramenta de build e desenvolvimento rápido
- **Chart.js** & **react-chartjs-2** — renderização dos gráficos (Doughnut, Line, Radar, Bar)
- **Axios** — requisições HTTP para a API de câmbio
- **ESLint & Prettier** — padronização e qualidade do código

---

## ✨ Alterações Realizadas

- Integração com a API da Alpha Vantage para buscar taxas de câmbio em tempo real.
- Criação de componentes reutilizáveis para cada tipo de gráfico: Doughnut, Line, Radar e Grouped Bar.
- Organização dos componentes em pastas separadas para melhor manutenção.
- Estilização com CSS Grid para layout responsivo dos gráficos.
- Configuração de ESLint e Prettier para manter o código limpo e padronizado.

---

## 📁 Estrutura do Projeto

```
dashboardReact/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── doughnut/
│   │   ├── grouped-bar/
│   │   ├── line/
│   │   └── radar/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

---

## 🚦 Como Utilizar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/joaovitorsamora/dashboardReact.git
   cd dashboardReact
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure a chave da API:**
   - Crie um arquivo `.env` na raiz do projeto (caso não exista) e adicione sua chave da Alpha Vantage:
     ```
     REACT_APP_API_KEY='SUA_CHAVE_AQUI'
     ```

4. **Inicie o projeto em modo desenvolvimento:**
   ```sh
   npm run dev
   ```

5. **Acesse no navegador:**
   - O dashboard estará disponível em `http://localhost:5173` (ou porta indicada pelo Vite).

---

## 📊 Funcionalidades

- Visualização das taxas de câmbio BTC, ETH e LTC em tempo real.
- Gráficos dinâmicos e responsivos.
- Código modular e fácil de manter.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias!

---
