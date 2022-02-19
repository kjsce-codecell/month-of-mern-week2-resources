import Joi from "joi";

export const addTodoValidation = Joi.object({
  text: Joi.string().required(),
});

export const toggleTodoValidation = Joi.object({
  id: Joi.string().required(),
  currentComplete: Joi.boolean().required(),
});
