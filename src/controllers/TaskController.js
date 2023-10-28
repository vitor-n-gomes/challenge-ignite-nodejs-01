import { Database } from "../../database/database.js";
import TaskError from "../errors/TaskErrors.js";
import TaskCreate from "../services/TaskCreate.js";
import TaskDelete from "../services/TaskDelete.js";
import TaskList from "../services/TaskList.js";
import TaskUpdate from "../services/TaskUpdate.js";

export class TaskController {

  index(req, res) {

    const { title, description } = req.query;

    const searchObj =
      title || description
        ? {
          title: title,
          description: description,
        }
        : null;

    const list = new TaskList();

    const tasks = list.handle(searchObj);

    return res.end(JSON.stringify(tasks));

  }

  create(req, res) {

    const { title, description } = req.body;

    if ((!title || String(title).length == 0) || (!description || String(description).length == 0)) {
      return res.writeHead(400).end(
        JSON.stringify({
          message:
            "To create a task, the title and description must be provided.",
        })
      );
    }

    const create = new TaskCreate();

    const result = create.handle({ title, description });

    return res.writeHead(201).end(JSON.stringify(result));

  }

  update(req, res) {

    const { id } = req.params;
    const { title, description } = req.body;

    try {

      const update = new TaskUpdate();

      update.handle({ title, description }, id);

    } catch (error) {
      if (error instanceof TaskError) {
        return res
          .writeHead(error.statusCode)
          .end(JSON.stringify({ message: error.message }));
      }
    }

    return res.writeHead(204).end();

  }

  delete(req, res) {

    const { id } = req.params;

    try {
      
      const remove = new TaskDelete();

      remove.handle(id);

    } catch (error) {
      if (error instanceof TaskError) {
        return res
          .writeHead(error.statusCode)
          .end(JSON.stringify({ message: error.message }));
      }
    }

    return res.writeHead(204).end();

  }

  patch(req, res) {

    const { id } = req.params;
    
    try {
      
      const database = new Database;

      database.toggleComplete("tasks", id);
    
    } catch (error) {
      if (error instanceof TaskError) {
        return res
          .writeHead(error.statusCode)
          .end(JSON.stringify({ message: error.message }));
      }
    }

    return res.writeHead(204).end();

  }

}