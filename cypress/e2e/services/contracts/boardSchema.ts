import Joi from 'joi';

const boardSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  closed: Joi.boolean().required(),
  url: Joi.string().uri().required()
})

export const boardsSchema = Joi.array().items(boardSchema)

