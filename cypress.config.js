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
      apiKey: "f908f6ce5fed5ed0f196017ff81dede8",
      token: "ATTA3645f37d061eb01f8c20ebd7caddb737b6cccb3b19012715e70dcd60f2b29fb804EEBDED"
    },
    retries: {
      runMode: 0, //Caso seja necessário retentativa globalmente nos cenários via jenkins
      openMode: 0 //Caso seja necessário retentativa globalmente nos cenários via gráfico com cypress open
    },
    specPattern: 'cypress/e2e/**/tests/*.cy.{js,ts,jsx,tsx}',
  },
  fixturesFolder: false,
})
