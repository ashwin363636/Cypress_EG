import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'

describe('Show - hide field test', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })

  it('Alternate between show and hide field option', () => {
    let str: string = 'test'
    homePage
      .enterValueInShowHideField(str)
      .VerifyShowHideFieldIsVisibleAndContainsValue()
      .hideField()
      .VerifyShowHideFieldIsHiddenAndContainsValue()
      .showField()
      .VerifyShowHideFieldIsVisibleAndContainsValue()
  })
})
