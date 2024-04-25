/// <reference types="cypress" />
import { homePage } from '../../support/pageobjects/homepage'

describe('File upload tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Upload a valid jpg file', () => {
    //uploads and verifies if the upload was successful.
    homePage.uploadFile('test.jpeg')
  })
})
