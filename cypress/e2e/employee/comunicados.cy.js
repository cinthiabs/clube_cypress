/// <reference types="cypress" />

before(()=>{
    cy.LoginEmployee()
});
after(()=>{
    cy.Logout()
});
describe('Communicate', () => {
    it('validate page ',() => {
        if (cy.get(':nth-child(1) > .lermais').should('be.visible')){
            cy.get(':nth-child(1) > .lermais').click()
            cy.get('.imgcompleto').should('be.visible')
            cy.get('.comunicado-completo > h3').should('be.visible')
            cy.get('.categoria').should('be.visible')
            cy.get('.data').should('be.visible')
            cy.get('.comunicado-completo > :nth-child(5)').should('be.visible')
            cy.get('.editar').click()
        }
    });
    
});