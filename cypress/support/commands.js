 import './commands';
 
 Cypress.Commands.add('acessarLoja', () => {
  cy.visit('https://www.apple.com/br/');
  cy.contains('Loja').click();
});

Cypress.Commands.add('selecionarProduto', (nomeProduto) => {
  cy.get(':nth-child(1) > .rf-cards-scroller-itemview > .rf-ccard > .as-util-relatedlink > .rf-ccard-content > .rf-ccard-img-full-wrapper > .rf-ccard-img-full')
  .click({ force: true });
});

Cypress.Commands.add('selecionarVersao', () => {
  cy.contains('Tela de 6,3').click({ force: true });
});

Cypress.Commands.add('selecionarCor', () => {
  cy.get('.colornav-link .colornav-swatch')
    .first()
    .scrollIntoView()
    .click({ force: true });
});

Cypress.Commands.add('selecionarArmazenamento', (capacidade) => {
  cy.contains(capacidade).scrollIntoView().click({ force: true });
});

Cypress.Commands.add('validarResumo', (produtoEsperado) => {
  cy.contains(produtoEsperado).should('exist');
});

Cypress.Commands.add('adicionarNaSacola', () => {
  cy.contains('Colocar na sacola').click({ force: true });
});

