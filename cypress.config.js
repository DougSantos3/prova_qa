const { defineConfig } = require('cypress')

const cyPostgres = require('cypress-postgres-10v-compatibility')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        dbQuery: query => cyPostgres(
          query.query,
          query.connection
        )
      })

      return config
    },
    baseUrl: 'https://api.trello.com',
    env: {
      apiKey: "Your Api Key",
      token: "Your Token"
    },
    specPattern: 'cypress/e2e/**/tests/*.cy.{js,ts,jsx,tsx}',
  },
  fixturesFolder: false,
})
