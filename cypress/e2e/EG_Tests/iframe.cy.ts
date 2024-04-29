import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'
import 'cypress-iframe'

describe('Verify iFrame component', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })

  it('Switch to the iframe and verify webelement', () => {
    homePage.getIntoIframeAndVerifyAWebElement()
  })
})
