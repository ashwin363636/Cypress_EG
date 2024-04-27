/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homePage'

describe('Verify Mouse hover functionality', () => {
  beforeEach(() => {
    cy.visit('/')
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
