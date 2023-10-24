import { Database } from "../../database/database.js";

import { randomUUID } from "node:crypto";

const database = new Database();

export default class TaskUpdate {

    constructor() {
        
    }

    handle(data, id) {

        const { title, description } = data;

        database.update("tasks", id, { title, description });

    }
}
