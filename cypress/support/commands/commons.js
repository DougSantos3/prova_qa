Cypress.Commands.add('postExampleOfAveryCommonRequest', ( body = { valueOne, valueTwo, valueThree, valueFour }) => {
  cy.request({
    method: 'POST',
    url: '/exampleOfAveryCommonRequest',
    body: body,
    headers: { authorization: Cypress.env('token') }
  })
})

Cypress.Commands.add('loginExample', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      email: email,
      password: password
    }
  }).then((response) => {
    Cypress.env('token', response.body.authorization)
  })
})

Cypress.Commands.add('getExampleOfCommonRequestWithQueryParameter', (qs) => {
  cy.request({
    method: 'GET',
    url: '/exampleOfAveryCommonRequest',
    ... (qs && { qs }),
    headers: { authorization: Cypress.env('token') }
  })
})

Cypress.Commands.add('putExampleOfAveryCommonRequest', (id, body = { valueOne, valueTwo, valueThree, valueFour }) => {
  cy.request({
    method: 'PUT',
    url: `/exampleOfAveryCommonRequest/${id}`,
    body: body,
    headers: { authorization: Cypress.env('token') }
  })
})

Cypress.Commands.add('deleteExampleOfAveryCommonRequest', (id) => {
  cy.request({
    method: 'DELETE',
    url: `/exampleOfAveryCommonRequest/${id}`,
    headers: { authorization: Cypress.env('token') }
  })
})
