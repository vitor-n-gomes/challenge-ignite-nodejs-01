import { Database } from "../../database/database.js";

import { randomUUID } from "node:crypto";

const database = new Database();

export default class TaskCreate {

    constructor() {
        
    }

    handle(data) {

        const task = {
            id: randomUUID(),
            title: data.title,
            description: data.description,
            completed_at: null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        const taskCreated = database.insert("tasks", task);

        return taskCreated

    }
}
