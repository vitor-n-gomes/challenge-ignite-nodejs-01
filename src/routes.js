import { buildRoutePath } from "./utils/build-route-path.js";
import { TaskController } from "./controllers/TaskController.js";

const controller = new TaskController

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => controller.index(req, res)
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => controller.create(req, res)
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => controller.delete(req, res)
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => controller.update(req, res)
  },
];
