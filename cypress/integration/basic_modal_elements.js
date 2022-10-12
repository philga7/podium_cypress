describe('General Modal Smoke Test', () => {
    before('', () => {
        cy.visit('')
    })
    it('Confirms Podium modal elements', () => {
        // TODO:
        // - Work on mouseover for Close button
        // - Find text in modal to validate
        /*
        cy.get('#podium-prompt')
            .should('exist')
            .realHover()
            .should('have.text', 'close')
        */
        // Other elements here.
        cy.get('#podium-bubble')
            .should('exist')
        cy.get('#podium-prompt')
            .should('exist')
        cy.get('#podium-bubble')
            .realClick()
        cy.frameLoaded('#podium-modal')
        cy.iframe('#podium-modal').contains('Select Location')
            .should('be.visible')
        cy.iframe('#podium-modal').contains('Search for the location you want to contact by entering a postal code or address.')
            .should('be.visible')
        // One way to select an option to go forward
        cy.iframe('#podium-modal').contains('Scoreboard Sports - Narnia')
            .should('be.visible')
        cy.iframe('#podium-modal').contains('6680 Little Cottonwood Canyon Rd, Sandy, UT 84092, United States')
            .should('be.visible')
            .click()
        cy.iframe('#podium-modal').contains('By submitting, you authorize Scoreboard Sports - Narnia to send text messages with offers & other information, possibly using automated technology, to the number you provided. Message/data rates apply. Consent is not a condition of purchase.')
            .should('be.visible')
        cy.iframe('#podium-modal').contains('use is subject to terms')
        
        cy.iframe('#podium-modal').contains('intro message')
            .scrollIntoView()
            .should('be.visible')
        cy.iframe('#podium-modal').contains('Name*')
            .should('be.visible')
        /*
        cy.iframe('#podium-modal').contains('Mobile Phone*')
            .should('be.visible')
        */
        cy.iframe('#podium-modal').find('#Message')
            .should('be.visible')
        cy.iframe('#podium-modal').find('button.SendButton.SendButton--incomplete')
            .scrollIntoView()
            .should('be.visible')
        cy.get('#podium-bubble')
            .realClick()
    })
})