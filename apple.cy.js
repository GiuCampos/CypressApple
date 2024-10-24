describe('Teste de compra', () => {
  it('Acessar Loja da Apple', () => {

    cy.viewport(2000, 1100)
    //Define a janela de visualização para 2000px x 1100px

    cy.visit('https://www.apple.com/br/')
    //Acessa o site desejado
    cy.url('')
      .should('be.equal', 'https://www.apple.com/br/')
    //Valida se foi acessado o site corretamente
    cy.contains('Loja').click()
    //Valida se existe a opção de Loja dentro do site e realiza o clique

  })

  it('Realiza compra', () => {

    cy.viewport(2000, 1100)
    //Define a janela de visualização para 2000px x 1100px

    cy.visit('https://www.apple.com/br/store')
    //Acessa o site desejado
    cy.contains('Loja. Já é Natal na Apple. Maravilhas à sua espera.')
    //Valida se foi acessado o site corretamente, de acordo com o texto esperado

    cy.wait(2000)
    //Aguarda 20s antes de continuar o teste

    cy.get('#shelf-2_section > .rf-cards-scroller > .rf-cards-scroller-crop > .rf-cards-scroller-content > .rf-cards-scroller-platter > :nth-child(1) > .rf-cards-scroller-itemview > .rf-ccard > .as-util-relatedlink > .rf-ccard-content > .rf-ccard-img-full-wrapper > .rf-ccard-img-full').click();
    //Seleciona o produto desejado
    cy.contains('Tela de 6,1 polegadas¹').click();
    //Seleciona o modelo do produto
    cy.contains('Cor')
    //Visualiza se existe a opção de selecionar a cor do produto
    cy.get(':nth-child(4) > .colornav-link > .colornav-swatch').click()
    //Seleciona a cor do produto desejado
    cy.contains('Armazenamento')
    //Visualiza se existe a opção de selecionar a quantidade de armazenamento do produto
    cy.contains('128 GB').click();
    //Seleciona a opção desejada
    cy.contains('Colocar na sacola').click()
    //Visualiza se existe a opção de comprar e realiza o clique
    cy.contains('Ver sacola').click()
    //Visualiza se existe a opção Ver Sacola e realiza o clique
    cy.contains('Pagar').click()
    //Visualiza se existe a opção Pagar e realiza o clique.

    cy.wait(500)
    //Aguarda 5s antes de continuar o teste

    cy.contains('Inicie sessão para finalizar a compra com rapidez.')
    //Confere se foi redirecionado para tela de finalizar compra.
  })
});