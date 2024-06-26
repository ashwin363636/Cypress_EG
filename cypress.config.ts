/// <reference types="cypress" />
const { defineConfig } = require('cypress')
const fs = require("fs");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
require('dotenv').config()

module.exports =  defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  env: {
    eg_url: process.env.EG_URL
  },
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  projectId: "rnrvqp",
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  video: false,
  retries: {
    runMode: 2,
    openMode: 0
  },

 
  
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: 'cypress/e2e/**/*.ts',
    excludeSpecPattern: '**/examples/*',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
       
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      // implement node event listeners here
      on('task',{
         fileread(filename: string)
         {
          try {
            const textContent =  fs.readFileSync(filename);
            return textContent.toString().replace(/(\r\n|\n|\r)/gm, "")
        
          } catch (err) {
            console.log("Error---------------------- " + err);
            throw err
          }
        }
      }

      )
    },
  },
});
