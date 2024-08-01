import Joi from 'joi';

const boardSchemaWithClosed = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  closed: Joi.boolean().required(),
  url: Joi.string().uri().required()
})

export const boardsSchemaCompleted = Joi.array().items(boardSchemaWithClosed)

