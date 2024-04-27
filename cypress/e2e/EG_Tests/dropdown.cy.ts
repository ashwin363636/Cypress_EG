/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homePage'

describe('Dropdown tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('verify multiple dropdown options', () => {
    homePage
      .selectDropdownOptionAs('Option3')
      .verifyOptionSelectedIs('option3')
      .selectDropdownOptionAs('Option1')
      .verifyOptionSelectedIs('option1')
  })
})
