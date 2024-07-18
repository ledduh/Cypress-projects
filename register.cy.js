/// <reference types="cypress" />

it ('Register User', () => {

    cy.visit('http://automationexercise.com')
    cy.contains('Cart')
    cy.contains('Login').click()
    cy.contains('New User Signup!').should('be.visible')
    cy.get('[data-qa="signup-name"]').type('Test User')
    cy.get('[data-qa="signup-email"]').type('ez@menubar.org')
    cy.get('[data-qa="signup-button"]').click()
    
    cy.get('select').select('1')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('89727!!')
    cy.get('[data-qa="days"]').select('10')
    cy.get('[data-qa="months"]').select('March')
    cy.get('[data-qa="years"]').select('1980')
    cy.get('#newsletter').click()
    cy.get('#optin').click()

    cy.get('[data-qa="first_name"]').type('ra')
    cy.get('[data-qa="last_name"]').type('re')
    cy.get('[data-qa="company"]').type('roro')
    cy.get('[data-qa="address"]').type('0011')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Europe')
    cy.get('[data-qa="city"]').type('zigi')
    cy.get('[data-qa="zipcode"]').type('500')
    cy.get('[data-qa="mobile_number"]').type('1100110011')



    
    cy.contains('ACCOUNT CREATED!')
    cy.get('Continue').click()
    cy.contains('Logged in as username')


})