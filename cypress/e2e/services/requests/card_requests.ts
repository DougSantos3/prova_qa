export const createCard = (listId: string, name: string) => {
  return cy.request({
    method: 'POST',
    url: '/1/cards',
    qs: {
      idList: listId,
      name: name,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const getCard = (cardId: string) => {
  return cy.request({
    method: 'GET',
    url: `/1/cards/${cardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const deleteCard = (cardId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `/1/cards/${cardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}
