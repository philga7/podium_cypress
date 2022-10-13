describe('General Page Smoke Test', () => {
    before('', () => {
        cy.visit('')
    })
    it('Confirms main page elements', () => {
        cy.url()
            .should('include', 'qa-webchat-lorw/')
        cy.get('.full-height')
            .should('exist')
        cy.get('h1')
            .should('have.text', 'All we have to decide is what to do with the time that is given us.')
        cy.get('#podium-bubble')
            .should('exist')
        cy.get('#podium-prompt')
            .should('exist')
    })
})