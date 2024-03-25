/// <reference types="cypress" />

beforeEach(()=>{
    cy.LoginEmployee()
    cy.get('#meus-agendamentos').click()
        cy.get('h4').should('be.visible','Agendamentos')
});
afterEach(()=>{
  // cy.Logout()
});

describe('Schedules', () => {
    it('New schedule, view and delete schedule',() => {
        cy.get('.col-sm-3 > .btn').should('contain','Novo Agendamento').click()
        
        cy.get('.confraternizacao > h2').should('be.visible','Espaços de Confraternização')
        cy.get('.confraternizacao')
        .contains('Espaço Gourmet')
        .parent(':nth-child(3)') 
        .find('.btnlugares > .green')
        .click()
    });
});