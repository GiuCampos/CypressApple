describe('Fluxo de compra na Apple Store', () => {
  const produtoEsperado = 'iPhone 16 Pro de 128 GB – Titânio-deserto';

  beforeEach(() => {
    cy.viewport(2000, 1100);
  });

  it('Deve acessar a loja da Apple com sucesso', () => {
    cy.acessarLoja();
    cy.url().should('include', 'apple.com/br');
  });

  it('Deve adicionar um iPhone 16 Pro 128GB na sacola', () => {
    cy.visit('https://www.apple.com/br/store');
    cy.contains('Loja.').should('be.visible');

    cy.selecionarProduto('iPhone');
    cy.selecionarModelo('iPhone 16');
    cy.clicarEmComprar();

    cy.selecionarVersao('iPhone 16 Pro');
    cy.selecionarCor();
    cy.selecionarArmazenamento('128 GB');
    cy.validarResumo(produtoEsperado);
    cy.adicionarNaSacola();
  });
});