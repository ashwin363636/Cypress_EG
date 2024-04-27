/// <reference types="cypress" />
export class CreateCoursePage {
  verifyCreateCoursePageOpen() {
    cy.origin('https://www.easygenerator.com/en/', () => {
      cy.contains('Login')
    })
    return this
  }
}

export const createCoursePage = new CreateCoursePage()
