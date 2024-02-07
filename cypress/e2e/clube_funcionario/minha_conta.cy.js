/// <reference types="cypress" />
import faker from 'faker';

//Variaveis 
const botaoSalvar = '.btn'

beforeEach(()=>{
    cy.AcessarSistemaFuncionario()
});
afterEach(()=>{
   cy.LogoutSistemaFuncionario()
})


describe('Regressivo - Minha conta', () => {
    it('Positivo - Alteração de dados',() => {
        cy.get('#minha-conta').click()
        cy.get('h4').should('be.visible','Minha Conta')
        cy.get('[name="nome"]').clear().type(faker.name.findName())
        cy.get('.celular').clear().type(faker.phone.phoneNumberFormat())
        
        //valida cep
        cy.get('#cep').clear().type('09371100')
        cy.get('#numero').type('1') 
        cy.get('#endereco').invoke('val').should('not.be.empty');
        cy.get('#cidade').invoke('val').should('not.be.empty');
        cy.get('#tipo').invoke('val').should('not.be.empty');
        cy.get('#bairro').invoke('val').should('not.be.empty');
        cy.get('#estado').invoke('val').should('not.be.empty');
        cy.get('.btn').click()

    })
    it('Negativo - Alteração de dados',() => {
        cy.get('#minha-conta').click()
        cy.get('h4').should('be.visible','Minha Conta')
        cy.get('[name="nome"]').clear().type(faker.name.findName())
        cy.get('.celular').clear().type(faker.lorem.paragraph())
        cy.get('[type="email"]').clear().type(faker.lorem.paragraph()) 
        // cep invalido
        cy.get('#cep').clear().type('00000000')
        cy.get('#endereco').click()
        cy.wait(1000)
        cy.get('#endereco').invoke('val').should('be.empty');
        cy.get('#cidade').invoke('val').should('be.empty');
        cy.get('#bairro').invoke('val').should('be.empty');
    })
})
