//Ambiente desenvolvimento 
const url = 'https://peopleexperienceskf.com.br/clube/'
Cypress.Commands.add("LoginEmployee",(
    username = Cypress.env('USER'),
    password = Cypress.env('PASSWORD')
) =>{
    cy.visit(url)
    cy.get(':nth-child(1) > .form-control').type(username)
    cy.get(':nth-child(2) > .form-control').type(password)
    cy.get('button.btn').click()

    //cy.intercept('GET', '**/comunicados').as('GetComunicados');
    //cy.wait('@GetComunicados');

    cy.get('.side-top > img').should('be.visible')
});

Cypress.Commands.add('sessionLoginEmployee', (
    username = Cypress.env('USER'),
    password = Cypress.env('PASSWORD')
) => {

    const login = () => cy.LoginEmployee(username, password)
    cy.session(username, login) 
    cy.get('.side-top > img').should('be.visible')
});
  


Cypress.Commands.add("LoginAdmin",(
    username = Cypress.env('USER_ADMIN'),
    password = Cypress.env('PASSWORD_ADMIN')
) =>{

    cy.visit(url)
    cy.get(':nth-child(1) > .form-control').type(username)
    cy.get(':nth-child(2) > .form-control').type(password)
    cy.get('button.btn').click()
    cy.get('.side-top > img').should('be.visible')
});


