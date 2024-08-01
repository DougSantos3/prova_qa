import Joi from 'joi'
import { boardsSchema } from '../contracts/boardSchema'
import { getBoards  } from '../requests/boardRequests'

it('Deve validar o contrato de uma board', () => {
  getBoards().then(response => {
    expect(response.status).to.eq(200);

    response.body.forEach(board => {
      const { error } = boardsSchema.validate(board);
      expect(error).to.be.undefined;
    });
  });
});

describe('Trello API Tests', () => {
  it('Deve obter a lista de boards do usuário', () => {
    getBoards().then(response => {
      expect(response.status).to.eq(200);

      response.body.forEach(board => {
        const { error } = boardsSchema.validate(board)
        expect(error).to.be.undefined
      })
    })
  })
})