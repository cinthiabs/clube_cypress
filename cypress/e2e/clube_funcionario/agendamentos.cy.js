/// <reference types="cypress" />


beforeEach(()=>{
    cy.AcessarSistemaFuncionario()
    cy.get('#meus-agendamentos').click()
        cy.get('h4').should('be.visible','Agendamentos')
});
afterEach(()=>{
   cy.LogoutSistemaFuncionario()
});

describe('Regressivo - Agendamentos', () => {
    it('Positivo - Novo agendamento',() => {
        cy.get('.col-sm-3 > .btn').should('contain','Novo Agendamento').click()
        
        cy.get('.confraternizacao')
        .contains('Espaço Gourmet')
        .parent(':nth-child(3)') 
        .find('.btnlugares > .green')
        .click();
    });
});