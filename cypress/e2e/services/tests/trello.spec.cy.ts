import { createBoard, deleteBoard } from '../requests/boardRequests'
import { createList } from '../requests/listRequests'
import { createCard, deleteCard, getCard } from '../requests/cardRequests'

describe('Trello API Tests', () => {
  let boardId: string
  let listId: string
  let cardId: string
  const boardName = 'Board Serasa'
  const listName = 'Apps'
  const cardName = 'Android'

  const idBoard = "idBoard"

  before(() => {
    createBoard(boardName).then(response => {
      expect(response.status).to.eq(200)
      boardId = response.body.id
     
     createList(boardId, listName).then(response => {
        expect(response.status).to.eq(200)
        listId = response.body.id

        createCard(listId, cardName).then(response => {
          expect(response.status).to.eq(200)
          cardId = response.body.id
        })
      })
    })
  })

  it('Deve criar um novo card na lista', () => {
    getCard(cardId).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq(cardName)
    })
  })

  it('Deve excluir o card', () => {
    deleteCard(cardId).then(response => {
      expect(response.status).to.eq(200)
    })
  })

  it('Deve excluir o board', () => {
    deleteBoard(boardId).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})
