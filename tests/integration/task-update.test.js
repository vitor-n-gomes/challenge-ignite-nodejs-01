import test from 'node:test'
import assert from 'node:assert'
import { promisify } from 'node:util'
import { makeTask } from '../factory/task.js'

const testPort = process.env.PORT ? Number(process.env.PORT) + 1 : 9009
const testServerAddress = `http://localhost:${testPort}`
let server;
let id;

test('Update Task', async (t) => {

  t.before('Starting server', async () => {

    process.env.PORT = testPort

    server = await import('../../src/server.js')

  })

  t.after('Closing server', async () => {

    if (!server) {
      console.error('Server is undefined');

    }

    await promisify(server.close.bind(server))()

  })

  t.before('Get the ID from a task', async (t) => {


    const task = makeTask();

    const request = await fetch(testServerAddress + '/tasks', {
      method: 'POST',
      body: JSON.stringify(task)
    })

    assert.deepStrictEqual(
      request.headers.get('content-type'),
      'application/json'
    )

    assert.strictEqual(request.status, 201)

    const result = await request.json()

    id = result.id;


  })

  await t.test('it should update a task', async (t) => {

    const task = makeTask();

    task.description = 'Test Value';

    const request = await fetch(testServerAddress + '/tasks/' + id, {
      method: 'PUT',
      body: JSON.stringify(task)
    })

    assert.deepStrictEqual(
      request.headers.get('content-type'),
      'application/json'
    )

    assert.strictEqual(request.status, 204)

  })


  await t.test('it should fail because the task does not exist', async (t) => {

    const task = makeTask();

    task.description = 'Test Value';

    const request = await fetch(testServerAddress + '/tasks/' + id + 'a', {
      method: 'PUT',
      body: JSON.stringify(task)
    })

    assert.deepStrictEqual(
      request.headers.get('content-type'),
      'application/json'
    )

    assert.strictEqual(request.status, 400)

  })


})