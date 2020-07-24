// cypress here yo
describe('Inputs and submit button', () => {
    it('navigate to the site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')  
    })
    it('verify the submit button is disabled', () => {
        cy.get("#submitBtn").should('be.disabled')
    })
    it('can enter inputs in the form and submit', () => {
        cy.get('input[name="name"').type('Miah')
        cy.get('input[value="garlicRanch"').click()
        cy.get('input[name="pepperoni"').click()
        cy.get('input[name="specialInstruction"').type('Please do not burn my food')
        cy.get('select').select('Small')
        cy.get("#submitBtn").click()
    })

})