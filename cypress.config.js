const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '641jec',
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
});
