//Write the Automation Test for at least two test cases you have listed
describe('Passster plugin Tests', function() {

    it('Incorrect password', function() {
        cy.visit('http://test.local/about/')

        cy.get('#passster_password').type('1234')

        cy.get('.passster-submit').click()

        cy.get('.passster-error')
            .should('have.text', 'Invalid password')
    })

    it('Correct password', function() {
        cy.visit('http://test.local/about/')

        cy.get('#passster_password').type('12345')

        cy.get('.passster-submit').click()

        cy.url()
            .should('contain', 'http://test.local/about/')
    })

})