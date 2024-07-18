/// <reference types="cypress" />

describe('jambo spec', () => {
    it('URL HIT', () => {
        cy.visit('https://accounts.jambopay.com/v2/')
        cy.get('.text-orange-600').eq(1)
          .should ('be.visible')
          .click()
        cy.get('.mat-button-wrapper').eq(0)
          .should('be.visible')
          .click()
        
        cy.get('input[placeholder*="phoneNumber"]')
          .should('be.visible')
          .type('0729423363')
        
        cy.get('input[formcontrolname*="password"]')
          .should('be.visible')
          .type('0729423363')
        cy.get('.mat-checkbox-inner-container')
          .should('be.visible')
          .click()
    })
} )