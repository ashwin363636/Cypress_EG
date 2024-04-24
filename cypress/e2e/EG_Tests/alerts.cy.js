/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homepage'

describe('Invoke an alert/confirmation modal', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('Simple Alert tests', () => {
    it('verify simple alert without input name', () => {
      let name = 'Ashwin'
      homePage.getSimpleAlertText(
        name,
        `Hello ${name}, share this practice page and share your knowledge`,
      )
    })

    it('verify simple alert without input name', () => {
      homePage.getSimpleAlertText(
        null,
        `Hello , share this practice page and share your knowledge`,
      )
    })
    it('verify confirm alert with special characters as input name', () => {
      var name = '#$%%^'
      homePage.getConfirmAlertText(
        name,
        `Hello ${name}, Are you sure you want to confirm?`,
      )
    })

    it('Using cy.task() to read text from a file to invoke the alert', async () => {
      cy.task('fileread', './cypress/fixtures/alert_text.txt').then(($str) =>{
        homePage.getSimpleAlertText(
          $str,
          `Hello ${$str}, share this practice page and share your knowledge`,
        )
      })
      
    })
  })
})
