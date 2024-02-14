/// <reference types="cypress" />
import faker from 'faker';

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

    });
    it.only('Negativo - Alteração de dados',() => {
        cy.get('#minha-conta').click()
        cy.get('h4').should('be.visible','Minha Conta')
        cy.get('[name="nome"]').clear().type(faker.name.findName())
        cy.get('.celular').clear().type(faker.lorem.paragraph())
        cy.get('[type="email"]').clear().type(faker.lorem.paragraph()) 
        
        // cep invalido
        cy.get('#cep').clear().type('00000000')
        cy.get('#endereco').click()
        cy.wait(1000)
        cy.on('window:alert', (message) => {
            expect(message).to.equal('CEP não encontrado.');
        });
        cy.get('#endereco').invoke('val').should('be.empty');
        cy.get('#cidade').invoke('val').should('be.empty');
        cy.get('#bairro').invoke('val').should('be.empty');
        
    });
    it('Funcionalidade - Envie uma foto sua',() => {
        const fileInputSelector = ':nth-child(2) > .form-control';
        const fileName = 'Teste.png';
        const filePath = `./cypress/fixtures/${fileName}`;

        cy.get('#minha-conta').click()
        cy.get('h4').should('be.visible','Minha Conta')

        // Faz o upload do arquivo
        cy.uploadFile(fileInputSelector, fileName, filePath);
        cy.get('.btn').click()
        cy.get('.succWrap').should('contain','Dados atualizados!')
    });
});
