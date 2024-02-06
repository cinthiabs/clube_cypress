Cypress.Commands.add("LogoutSistemaFuncionario",() =>{
    cy.get('.perfil-clean > a > .bi').click()
    cy.get('h3.text-center').should('contain','Entre no Sistema')
});
