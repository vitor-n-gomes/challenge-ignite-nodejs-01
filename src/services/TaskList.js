import { Database } from "../../database/database.js";

const database = new Database();

export default class TaskList {

    constructor() {
        
    }

    handle(searchObj) {

        const tasks = database.select("tasks", searchObj);

        return tasks

    }
}
