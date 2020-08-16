/// <reference types = "cypress"/>
class BasicAuthenticationPage {

    enterAppUrlWithAuthDetails(httpsBase,username, password,appURL) {

        var finalURL = httpsBase + username + ":" + password + "@" + appURL
        cy.visit(finalURL)

    }

    verifyBasicAutheHeaderText(headerText) {

        cy.get('h3').contains(headerText).should('be.visible')
        cy.get('h3').should('have.text', headerText)

    }

    verifyCongratsText(congratsText) {
        
        cy.get('p').contains(congratsText).should('be.visible')
        cy.get('p').contains( congratsText)
    }
}

export default BasicAuthenticationPage