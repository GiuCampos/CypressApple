describe('Teste de compra', () => {
  const appleUrl = 'https://www.apple.com/br/';
  const storeUrl = 'https://www.apple.com/br/store';
  const productTitle = 'iPhone 16 Pro de 128 GB – Titânio-deserto';

  it('Acessar Loja da Apple', () => {
    cy.viewport(2000, 1100);
    cy.visit(appleUrl);

    cy.url().should('eq', appleUrl); // Verifica se a URL é correta
    cy.contains('Loja').click(); // Clica na opção de Loja
  });

  it('Adiciona produto na sacola', () => {
    cy.viewport(2000, 1100);
    cy.visit(storeUrl);

    cy.contains('Loja.').should('be.visible'); // Verifica se a loja está acessível

    // Seleciona o iPhone
    cy.get('a.rf-productnav-card-title').contains('iPhone').click();
    cy.get('.rf-cards-scroller-itemview').contains('iPhone 16').click();
    cy.get('.rf-digitalmat-contentsection').contains('Comprar').click();

    // Seleciona o modelo desejado
    cy.get('.rf-bfe-column-right', {
        timeout: 10000
      })
      .contains('iPhone 16 Pro')
      .click();

    // Rola até a seção de cor e seleciona
    cy.contains('Cor').scrollIntoView();
    cy.get(':nth-child(1) > .colornav-link > .colornav-swatch').click();

    // Seleciona a capacidade de armazenamento
    cy.get('.rf-bfe-last-step > .rc-dimension')
      .contains('128 GB')
      .click();

    // Confere o resumo do pedido
    cy.get('.rf-bfe-summary-section-fullWidth')
      .contains('iPhone 16 Pro de 128 GB – Titânio-deserto'); // Verifica o resumo do pedido

    // Adiciona produto na sacola
    cy.get('.rf-bfe-summary-grid')
      .contains('Colocar na sacola')
      .click();
  });
});