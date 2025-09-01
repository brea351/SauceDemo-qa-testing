const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false
  }
});
