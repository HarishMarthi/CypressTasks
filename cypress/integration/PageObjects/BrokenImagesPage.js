/// <reference types = "cypress"/>

var invalidImageCount = 0
var imageEndPoint

class BrokenImagesPage {

    visitBrokenImagesApp(appURL){
        cy.visit(appURL)
    }
    
    verifyBrokenImagesText(header){
        cy.get('h3').should('have.text', header).should('be.visible')
        cy.get('h3').should('have.text', header)
    }

     getBrokenImagesCount(){  
        cy.get('.example>img').each(($e,index,$list) => { 
        cy.get($e)
          .should('have.attr', 'src')
          .then((src) => {
            imageEndPoint = src
            cy.request({
                method  : 'GET',
                url     :  Cypress.config().imagesBaseURL + imageEndPoint,
                failOnStatusCode : false
            }).then((response) => {
                return new Promise(resolve => {
                    if(response.status !==200){
                        invalidImageCount++
                    }
                    cy.log("********* Response ******** : "+response.status)
                    cy.log("********* Broken Image Count ******** : "+invalidImageCount)
                    resolve(response)
                 })
            })             
        })

        })  
    }

}

export default BrokenImagesPage