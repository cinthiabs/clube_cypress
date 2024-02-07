Cypress.Commands.add("LogoutSistemaFuncionario",() =>{
    cy.window().scrollTo('top');
    cy.get('.perfil-clean > a > .bi').click()
    cy.get('h3.text-center').should('contain','Entre no Sistema')
});
