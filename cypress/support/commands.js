 import './commands';
 
 Cypress.Commands.add('acessarLoja', () => {
  cy.visit('https://www.apple.com/br/');
  cy.contains('Loja').click();
});

Cypress.Commands.add('selecionarProduto', (nomeProduto) => {
  cy.contains(nomeProduto).click();
});

Cypress.Commands.add('selecionarModelo', (modelo) => {
  cy.contains(modelo).click();
});

Cypress.Commands.add('clicarEmComprar', () => {
  cy.contains('Comprar').click();
});

Cypress.Commands.add('selecionarVersao', (versao) => {
  cy.contains(versao).click();
});

Cypress.Commands.add('selecionarCor', () => {
  cy.contains('Cor').scrollIntoView();
  cy.get(':nth-child(1) > .colornav-link > .colornav-swatch').click();
});

Cypress.Commands.add('selecionarArmazenamento', (capacidade) => {
  cy.contains(capacidade).click();
});

Cypress.Commands.add('validarResumo', (produtoEsperado) => {
  cy.contains(produtoEsperado).should('exist');
});

Cypress.Commands.add('adicionarNaSacola', () => {
  cy.contains('Colocar na sacola').click();
});

// 
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })