/// <reference types="cypress" />

export class CreateCoursePage {
  verifyCreateCoursePageOpen() {
    cy.origin(Cypress.env('eg_url'), () => {
      cy.contains('Login')
    })
    return this
  }
}

export const createCoursePage = new CreateCoursePage()
