/// <reference types = "cypress"/>
class HoverImagesPage {
   
    visitHoverImagesApp(appURL){
        cy.visit(appURL)
    }
    
    verifyHeaderTextValues(hoverText, hoverDescripionText) {
        cy.get('h3').contains(hoverText).should('be.visible')
        cy.get('h3').should('have.text', hoverText)

        cy.get('p').contains(hoverDescripionText).should('be.visible')
        cy.get('p').should('have.text', hoverDescripionText)

    }

    verifyHoverImages(uuserName1,uuserName2,uuserName3,viewProfile){
        cy.get('[src = "/img/avatar-blank.jpg"]').eq(0).trigger('mouseover')
        cy.wait(2000)
        cy.get('[class="figcaption"]').eq(0).invoke('show').should('be.visible')
        cy.get('[class="figcaption"]').eq(1).should('be.have',uuserName1)
        cy.get('[class="figcaption"]').eq(1).should('be.have',viewProfile)
        cy.wait(2000)
        cy.get('[class="figcaption"]').eq(0).invoke('hide')

        cy.get('[src = "/img/avatar-blank.jpg"]').eq(1).trigger('mouseover')
        cy.wait(2000)
        cy.get('[class="figcaption"]').eq(1).invoke('show').should('be.visible')
        cy.get('[class="figcaption"]').eq(1).should('be.have',uuserName2)
        cy.get('[class="figcaption"]').eq(1).should('be.have',viewProfile)
        cy.wait(2000)
        cy.get('[class="figcaption"]').eq(1).invoke('hide')

        cy.get('[src = "/img/avatar-blank.jpg"]').eq(2).trigger('mouseover')
        cy.wait(2000)
        cy.get('[class="figcaption"]').eq(2).invoke('show').should('be.visible')
        cy.get('[class="figcaption"]').eq(1).should('be.have',uuserName3)
        cy.get('[class="figcaption"]').eq(1).should('be.have',viewProfile)
        cy.wait(2000)
        cy.get('[class="figcaption"]').eq(2).invoke('hide')

    }

}

export default HoverImagesPage