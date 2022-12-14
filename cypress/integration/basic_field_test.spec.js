describe('Basic Modal Field Test', () => {
    beforeEach('', () => {
        cy.visit('')
    })
    it('Confirm name-only input cannot be sent', () => {
        cy.clickPodiumBubble()
        cy.wait(1500)
        cy.frameLoaded('#podium-modal')
        cy.iframe('#podium-modal').contains('Scoreboard Sports - Narnia')
            .realClick()
        cy.iframe('#podium-modal').find('#Name')
            .type('1234')
        cy.iframe('#podium-modal').find('.TextInput__Checkmark.TextInput__Checkmark--show')
            .should('be.visible')
        cy.iframe('#podium-modal').find('button.SendButton.SendButton--incomplete')
            .should('be.visible')
    })
    it('Confirm name and phone but no message input cannot be sent', () => {
        cy.clickPodiumBubble()
        cy.wait(1500)
        cy.frameLoaded('#podium-modal')
        cy.iframe('#podium-modal').contains('Scoreboard Sports - Narnia')
            .realClick()
        cy.iframe('#podium-modal').find('#Name')
            .type('1234')
            .tab()
            .type('1234')
        cy.iframe('#podium-modal').find('.TextInput__Checkmark.TextInput__Checkmark--show')
            .should('be.visible')
        // cy.iframe('#podium-modal').contains('Mobile phone is too short')
        //    .should('be.visible')
        // cy.iframe('#podium-modal').contains('Message is required')
        //    .should('be.visible')
        cy.iframe('#podium-modal').find('button.SendButton.SendButton--incomplete')
            .should('be.visible')
    })
    it('Confirm all fields inputted can be sent', () => {
        cy.clickPodiumBubble()
        cy.wait(1500)
        cy.frameLoaded('#podium-modal')
        cy.iframe('#podium-modal').contains('Scoreboard Sports - Narnia')
            .realClick()
        cy.iframe('#podium-modal').find('#Name')
            .type('1234')
            .tab()
            .type('1234')
        cy.iframe('#podium-modal').find('#Message')
            .type('This is a test!')
        cy.iframe('#podium-modal').find('.TextInput__Checkmark.TextInput__Checkmark--show')
            .should('be.visible')
        cy.iframe('#podium-modal').find('button.SendButton.SendButton--valid')
            .should('be.visible')
    })
})