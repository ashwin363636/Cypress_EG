/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homepage'

describe('Show - hide field test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Alternate between show and hide field option', () => {
    let str = 'test'
    homePage
      .enterValueInShowHideField(str)
      .VerifyShowHideFieldIsVisibleAndContainsValue(str)
      .hideField()
      .VerifyShowHideFieldIsHiddenAndContainsValue(str)
      .showField()
      .VerifyShowHideFieldIsVisibleAndContainsValue(str)
  })
})
