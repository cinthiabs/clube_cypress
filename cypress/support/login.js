//Ambiente desenvolvimento 

Cypress.Commands.add("AcessarSistemaFuncionario",() =>{
    const username = '555555'
    const password = '123456'

    cy.visit('https://peopleexperienceskf.com.br/clube/')
    cy.get(':nth-child(1) > .form-control').type(username)
    cy.get(':nth-child(2) > .form-control').type(password)
    cy.get('button.btn').click()
    cy.get('.side-top > img').should('be.visible')
});


Cypress.Commands.add("AcessarSistemaAdmin",() =>{
    const username = 'cinthia'
    const password = '123456'

    cy.visit('https://peopleexperienceskf.com.br/clube/admin/')
    cy.get(':nth-child(1) > .form-control').type(username)
    cy.get(':nth-child(2) > .form-control').type(password)
    cy.get('button.btn').click()
    cy.get('.side-top > img').should('be.visible')
});
