/// <reference types = "cypress"/>

import BasicAuthenticationPage from './PageObjects/BasicAuthenticationPage'
import BrokenImagesPage from './PageObjects/BrokenImagesPage'
import HorizontalSliderPage from './PageObjects/HorizontalSliderPage'
import HoverImagesPage from './PageObjects/HoverImagesPage'

const basicAuthPage = new BasicAuthenticationPage()
const brokenImagesPage = new BrokenImagesPage()
const sliderPage = new HorizontalSliderPage()
const hoverImagesPage = new HoverImagesPage()


describe('Interview Tasks App Suite', function () {

    beforeEach(function () {
        cy.fixture('TestData').then(function (data) {
            this.data = data
        })
    })

    it('Verify Broken Images Count Calcutaion', function () {
        brokenImagesPage.visitBrokenImagesApp(Cypress.config().brokenImagesAppURL)
        brokenImagesPage.verifyBrokenImagesText( this.data.borkenImageText)
        brokenImagesPage.getBrokenImagesCount()
    })

    it('Verify Basic Authentication and Login Details', function () {
        basicAuthPage.enterAppUrlWithAuthDetails(Cypress.config().httpsBase, 
                                                    this.data.username, 
                                                    this.data.password, 
                                                    Cypress.config().basicAuthAppURL)
        basicAuthPage.verifyBasicAutheHeaderText(this.data.authHeaderText)
        basicAuthPage.verifyCongratsText(this.data.congatsText)
    })

    it('Verify Horizontal Slider Max and Min Range Values', function () {
        sliderPage.visitSliderApp(Cypress.config().sliderAppURL)
        sliderPage.verifySliderPageTexts(this.data.sliderHeaderText,this.data.sliderDescriptionText)

        sliderPage.verifySliderMinMaxRange(this.data.sliderMaxRange)
        sliderPage.verifySliderMinMaxRange(this.data.sliderMinRange)

    })

    it('Verify hover images with user details', function () {
        hoverImagesPage.visitHoverImagesApp(Cypress.config().hoversAppURL)
        hoverImagesPage.verifyHeaderTextValues(this.data.hoverText,this.data.hoverDescription)
        hoverImagesPage.verifyHoverImages(this.data.userNameOne,this.data.userNameTwo,this.data.userNameThree,this.data.viewProfileText)
    })

})