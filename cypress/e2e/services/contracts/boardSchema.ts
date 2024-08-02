import Joi from 'joi'

const boardSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  closed: Joi.boolean().optional(),
  url: Joi.string().uri().required()
})

const boardsSchema = Joi.array().items(boardSchema)

export { boardSchema }