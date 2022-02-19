import { Router } from "express";
import {
  addTodo,
  getAllTodos,
  toggleTodo,
} from "../controllers/todoController.js";

const todoRouter = Router();

todoRouter.get("/all", getAllTodos);

todoRouter.post("/add", addTodo);

todoRouter.post("/toggle", toggleTodo);

export default todoRouter;
