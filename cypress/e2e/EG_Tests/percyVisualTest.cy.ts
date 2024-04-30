import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'

describe('Percy test', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })

  it('Visual test with percy.io', () => {
    let str: string = 'test'
    cy.percySnapshot()
    homePage
      .enterValueInShowHideField(str)
      .VerifyShowHideFieldIsVisibleAndContainsValue()
    cy.percySnapshot('Field visible -1')
    homePage.hideField().VerifyShowHideFieldIsHiddenAndContainsValue()
    cy.percySnapshot('Field hidden')
    homePage.showField().VerifyShowHideFieldIsVisibleAndContainsValue()
    cy.percySnapshot('Field visible -2')
  })
})
