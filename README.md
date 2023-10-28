# challenge-ignite-nodejs-01
This is an exercise to reinforce learning associated with NodeJS

## Instalação

Before you start, you will need to have the following tools installed on your machine:

    1. Git
    2. Node 21 >= 

### Running Server 

```bash
# Clone this repository
$ git clone https://github.com/vitor-n-gomes/challenge-ignite-nodejs-01.git

# Access the project folder in the terminal/cmd
$ cd challenge-ignite-nodejs-01.git

# Install the dependencies
$ npm install
# If you prefer to use Yarn, run the command below
$ yarn

# Run the application in development mode
$ npm run dev
# If you prefer to use Yarn, run the command below
$ yarn dev

# To execute the creation of tasks by CSV, execute
$ npm run import:csv
# If you prefer to use Yarn, run the command below
$ yarn import:csv

# Run the tests E2E, run the command below
$ npm run test
# If you prefer to use Yarn, run the command below
$ yarn test

# The server will start on port 3000 - access <http://localhost:3000>
```

## About

Challenge proposed in the first module of the Ignite 2023 Bootcamp in the NodeJS track.

##  Fundamentals of NodeJS - Challenge

Challenge proposed in the NodeJS track of the Ignite 2023 Bootcamp in the module: Fundamentals of NodeJS.

The challenge proposed was to create an API to perform CRUD operations on tasks. The application contains the following features:

 - [x] Task creation.
 - [x] Listing of all tasks.
 - [x] Update a task by id.
 - [x] Removal of a task by id.
 - [x] Mark a task as complete by id.
 - [x] Bulk import of tasks from a CSV file.

Tasks have the following properties:

- **_id_** - Unique identifier for each task.
- **_title_** -Task title.
- **_description_** - Detailed task description.
- **_completed_at_** - Date when the task was completed. The initial value should be null.
- **_created_at_** -  Date when the task was created.
- **_updated_at_** - Should always be changed to the date when the task was updated.