/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homePage'
import 'cypress-iframe'

describe('Verify iFrame component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Switch to the iframe and verify webelement', () => {
    homePage.getIntoIframeAndVerifyAWebElement()
  })
})
