/// <reference types = "cypress"/>

class HorizontalSliderPage {

    visitSliderApp(appURL){
        cy.visit(appURL)
    }

    verifySliderPageTexts(header, desrcription){

        cy.get('h3').should('have.text', header).should('be.visible')
        cy.get('h3').should('have.text', header)

        cy.get('h4').contains(desrcription).should('be.visible')
        cy.get('h4').should('have.text', desrcription)
    }

    verifySliderMinMaxRange(rangeValue){
        cy.get('[type = "range"]')
          .should('have.attr', rangeValue)
          .then((rangeValue) => {
                var readinRangeValue = rangeValue

                if(rangeValue === 'min'){
                    cy.log("********* MIN RANGE ******** : "+readinRangeValue)  
                }else{
                    cy.log("********* MAX RANGE ******** : "+readinRangeValue)  
                }

                cy.window().then(win => win.showValue(readinRangeValue))
                cy.get('[type="range"]').then(function($input){
                    $input[0].setAttribute('value', readinRangeValue)
                })

                cy.get('[id="range"]').should('have.text', readinRangeValue)
        })
    }

}

export default HorizontalSliderPage