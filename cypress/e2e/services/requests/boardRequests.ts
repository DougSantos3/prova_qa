export const createBoard = (name: string) => {
  return cy.request({
    method: 'POST',
    url: '/1/boards/',
    qs: {
      name: name,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const deleteBoard = (boardId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `/1/boards/${boardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const getBoards = (cookie: String) => {
  return cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/members/me/boards',
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    },
    headers: {
      'Cookie': cookie
    }
  })
}
