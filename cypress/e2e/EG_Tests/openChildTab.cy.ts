/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homepage'

describe('Verify opening of child tab', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deleting target attribute to open child tab', () => {
    homePage.openCourseTab().verifyCreateCoursePageOpen()
  })
})
