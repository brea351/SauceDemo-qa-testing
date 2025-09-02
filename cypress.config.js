const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // You can add custom tasks here if needed
    },
    baseUrl: "https://www.saucedemo.com", // your app’s base URL
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/test-results-[hash].xml",
      toConsole: true
    },
  },
});

