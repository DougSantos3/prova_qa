import { boardSchema } from '../contracts/boardSchema'
import { getBoards } from '../requests/board_requests'

const cookie = 'dsc=e77cc985d3aada2fa780f48e6f08aa0ce7d1b07247156d5538fdc77ea8f90658'

it('Deve validar o contrato de uma board', () => {
  getBoards(cookie).then(response => {
    expect(response.status).to.eq(200)

    response.body.forEach(board => {
      const { error } = boardSchema.validate(board)
      expect(error).to.be.undefined;
    })
  })
})

describe('Trello API Tests', () => {
  it('Deve obter a lista de boards do usuário', { retries: 1 }, () => {
    getBoards(cookie).then(response => {
      expect(response.status).to.eq(200)

      response.body.forEach(board => {
        const { error } = boardSchema.validate(board)
        expect(error).to.be.undefined
      })
    })
  })
})

describe('Trello API Tests', () => {
  it('Deve obter a lista de boards do usuário', () => {
    getBoards(cookie).then(response => {
      expect(response.status).to.eq(200)

      response.body.forEach(board => {
        const { error } = boardSchema.validate(board)
        expect(error).to.be.undefined
      })
    })
  })

  it('Deve validar o contrato de uma board', () => {
    getBoards(cookie).then(response => {
      expect(response.status).to.eq(200)

      response.body.forEach(board => {
        const { error } = boardSchema.validate(board)
        expect(error).to.be.undefined
      })
    })
  })
})
