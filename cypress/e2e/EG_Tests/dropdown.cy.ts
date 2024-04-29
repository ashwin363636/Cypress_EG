import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'

describe('Dropdown tests', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })

  it('verify multiple dropdown options', () => {
    homePage
      .selectDropdownOptionAs('Option3')
      .verifyOptionSelectedIs('option3')
      .selectDropdownOptionAs('Option1')
      .verifyOptionSelectedIs('option1')
  })
})
