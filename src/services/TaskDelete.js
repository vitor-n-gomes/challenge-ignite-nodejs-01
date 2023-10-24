import { Database } from "../../database/database.js"

const database = new Database();

export default class TaskDelete {

    constructor() {
        
    }

    handle(id) {

        database.delete("tasks", id);

    }
}
