import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'

describe('File upload tests', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })

  it('Upload a valid jpg file', () => {
    //uploads and verifies if the upload was successful.
    homePage.uploadFile('test.jpeg')
  })
})
