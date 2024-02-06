/// <reference types="cypress" />

before(()=>{
    cy.AcessarSistemaFuncionario()
});
after(()=>{
    cy.LogoutSistemaFuncionario()
})
