import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'

describe('Verify opening of child tab', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })

  it('Deleting target attribute to open child tab', () => {
    homePage.openCourseTab().verifyCreateCoursePageOpen()
  })
})
