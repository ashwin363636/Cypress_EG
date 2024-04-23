const { defineConfig } = require('cypress')

module.exports =  defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.js',
    excludeSpecPattern: '**/examples/*',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
