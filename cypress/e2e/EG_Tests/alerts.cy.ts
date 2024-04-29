import { HomePage } from '../../support/pageobjects/homePage'
import { landingPage } from '../../support/pageobjects/landingPage'

describe('Invoke an alert/confirmation modal', () => {
  let homePage: HomePage
  beforeEach(() => {
    homePage = landingPage.launchApp()
  })
  it('verify simple alert without input name', () => {
    let name: string = 'Ashwin'
    homePage.getSimpleAlertText(
      name,
      `Hello ${name}, share this practice page and share your knowledge`,
    )
  })

  it('verify simple alert without input name', () => {
    var str: string = ' '
    homePage.getSimpleAlertText(
      str,
      `Hello  , share this practice page and share your knowledge`,
    )
  })
  it('verify confirm alert with special characters as input name', () => {
    var name: string = '#$%%^'
    homePage.getConfirmAlertText(
      name,
      `Hello ${name}, Are you sure you want to confirm?`,
    )
  })

  it('Using cy.task() to read text from a file to invoke the alert', async () => {
    cy.task('fileread', './cypress/fixtures/alert_text.txt').then(($str) => {
      if (typeof $str === 'string') {
        homePage.getSimpleAlertText(
          $str,
          `Hello ${$str}, share this practice page and share your knowledge`,
        )
      }
    })
  })
})
