describe('Basic Sanity Test', () => {
    it('Confirms initial page loads', () => {
        cy.visit('')
        cy.get('h1')
            .should('have.text', 'All we have to decide is what to do with the time that is given us.')
    })
})