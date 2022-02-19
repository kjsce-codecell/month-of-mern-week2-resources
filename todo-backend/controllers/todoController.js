import Todo from "../models/Todo.js";
import { addTodoValidation, toggleTodoValidation } from "../validation/todo.js";

export const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
};

export const addTodo = async (req, res) => {
  const { error, value } = addTodoValidation.validate(req.body);
  if (error) {
    res.status(400).send({ message: error.details[0].message });
    return;
  }

  const savedTodo = new Todo({
    text: value.text,
  });

  await savedTodo.save();

  const createdTodo = {
    id: savedTodo._id,
    text: savedTodo.text,
    complete: false,
  };

  res.send({ message: "Todo created", todoObj: createdTodo });
};

export const toggleTodo = async (req, res) => {
  const { error, value } = toggleTodoValidation.validate(req.body);
  if (error) {
    res.status(400).send({ message: error.details[0].message });
    return;
  }

  await Todo.updateOne(
    { _id: value.id },
    { $set: { complete: !value.currentComplete } }
  );

  return res.send({ success: true });
};
