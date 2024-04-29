import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'

describe('Verify Mouse hover functionality', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })

  it('Validate functionality of top option using mouse hover', () => {
    //gotoTop function will verify the window position to be top
    homePage.showHoverOption().goToTop()
  })

  it('Validate functionality of refresh option using mouse hover', () => {
    //Hide the show/hide field and then reload the page
    homePage
      .hideField()
      .showHoverOption()
      .refresh()
      .VerifyShowHideFieldIsVisibleAndContainsValue()
  })
})
