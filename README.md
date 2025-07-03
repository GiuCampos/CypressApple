# 🧪 Testes Automatizados com Cypress - Fluxo de Compra Apple

Este projeto utiliza o **Cypress**, uma poderosa ferramenta de testes end-to-end, para automatizar o fluxo de compra no site da **Apple Brasil**.  
O objetivo é garantir que a seleção de produtos e a adição à sacola estejam funcionando corretamente, simulando o comportamento de um usuário real.

---

## ✅ Pré-requisitos

- [Node.js (versão LTS recomendada)](https://nodejs.org/)
- npm (já incluso com o Node.js)
- Navegador (Chrome, Edge ou Electron)

---

## ⚙️ Instalação

1. **Clone este repositório:**

```bash
git clone https://github.com/GiuCampos/CypressApple.git
Acesse o diretório do projeto:

bash
Copiar
Editar
cd CypressApple
Instale as dependências:

bash
Copiar
Editar
npm install
🚀 Executando os Testes
Para abrir o Cypress com interface interativa:

bash
Copiar
Editar
npm start
Ao abrir a interface, selecione o navegador desejado (recomenda-se usar o Electron para melhor desempenho local).

Ou, se preferir rodar os testes em modo headless (sem interface):

bash
Copiar
Editar
npx cypress run
🔍 O que está sendo testado?
Acesso à loja da Apple

Navegação até a página do iPhone

Seleção de modelo, cor e armazenamento

Validação do resumo do produto

Adição do item à sacola

📁 Estrutura do Projeto
pgsql
Copiar
Editar
CypressApple/
├── cypress/
│   ├── e2e/
│   │   └── fluxo-compra.cy.js       # Arquivo principal de teste
│   └── support/
│       ├── commands.js              # Comandos customizados do Cypress
│       └── e2e.js                   # Importa os comandos no contexto global
├── package.json
└── README.md
💡 Melhorias Futuras
Implementar o padrão Page Object Model (POM)

Utilizar fixtures para massa de dados

Incluir testes negativos e fluxos alternativos

Integração com CI/CD (GitHub Actions)

👩‍💻 Sobre
Desenvolvido por Giuliana Campos
Analista de QA Manual | Explorando Cypress e automação de testes
📍 Brasil