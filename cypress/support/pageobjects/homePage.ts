/// <reference types="cypress" />
import { CreateCoursePage, createCoursePage } from './createCoursePage'

export class HomePage {
  selectDropdownOptionAs(option: string) {
    cy.get('#dropdown-class-example').select(option)
    return this
  }

  verifyOptionSelectedIs(option: string) {
    cy.get('#dropdown-class-example').should('have.value', option)
    return this
  }

  uploadFile(filename: string) {
    cy.fixture(filename).as('myfixture')
    cy.get('.image-upload-wrapper > input').as('uploadField')
    cy.get('@uploadField').selectFile('@myfixture')
    cy.contains('h3', 'Upload your image here')
      .siblings('img')
      .should('have.length', 1)
    return this
  }

  getSimpleAlertText(str: string, expectedMsg: string) {
    if (typeof str === 'string') {
      cy.get('#name').type(str)
    }
    cy.on('window:alert', (alertmsg) => {
      expect(alertmsg).to.equal(expectedMsg)
    })
    cy.get('#alertbtn').click()
  }

  getConfirmAlertText(str: string, expectedMsg: string) {
    if (typeof str === 'string') {
      cy.get('#name').type(str)
    }
    cy.on('window:confirm', (alertmsg) => {
      expect(alertmsg).to.equal(expectedMsg)
    })
    cy.get('#confirmbtn').click()
  }

  enterValueInShowHideField(text: string) {
    cy.get('#displayed-text').type(text)
    return this
  }

  VerifyShowHideFieldIsVisibleAndContainsValue() {
    cy.get('#displayed-text').should('be.visible')
    return this
  }

  VerifyShowHideFieldIsHiddenAndContainsValue() {
    cy.get('#displayed-text').should('not.be.visible')
    return this
  }

  showField() {
    cy.get('#show-textbox').click()
    return this
  }

  hideField() {
    cy.get('#hide-textbox').click()
    return this
  }

  openCourseTab() {
    //cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.get('#opentab').then((newTab) => {
      const hrefTab = newTab.prop('href')
      cy.visit(Cypress.env('eg_url'))
    })
    return createCoursePage
  }

  getIntoIframeAndVerifyAWebElement() {
    cy.frameLoaded('#courses-iframe')
    cy.iframe().contains('Login')
    return this
  }

  showHoverOption() {
    cy.get('.hover-btn').trigger('mouseover')
    cy.contains('Reload').should('be.visible')
    return this
  }

  refresh() {
    cy.contains('Reload').click()
    return this
  }

  goToTop() {
    cy.contains('Top').click()
    cy.window().should('have.property', 'top')
    return this
  }

  goToHome() {
    cy.get('a > .btn').click({ force: true })
    return createCoursePage
  }

  interceptURL(urlToBeintercepted: string) {
    cy.intercept('POST', urlToBeintercepted, {
      fixture: 'stubResponse.json',
    }).as('stubbedResponse')
    return this
  }
}

export const homePage = new HomePage()
