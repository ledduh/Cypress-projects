/// <reference types="cypress" />

it ('Google Search', () => {
    
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('myrekod.com{enter}')
    cy.contains('UPP').click()
})