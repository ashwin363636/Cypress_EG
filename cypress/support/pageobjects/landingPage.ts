/// <reference types="cypress" />

import { HomePage } from './homePage'

export class LandingPage {
  launchApp() {
    cy.visit('/')
    return new HomePage()
  }
}

export const landingPage = new LandingPage()
