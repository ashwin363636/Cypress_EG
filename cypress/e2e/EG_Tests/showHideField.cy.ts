/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homePage'

describe('Show - hide field test', () => {
  beforeEach(() => {
    cy.visit('/')
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
