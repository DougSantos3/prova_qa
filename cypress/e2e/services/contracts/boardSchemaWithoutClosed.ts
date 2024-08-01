import Joi from 'joi';

const boardSchemaWithoutClosed = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  url: Joi.string().uri().required()
})

export { boardSchemaWithoutClosed }