import test from 'node:test'
import assert from 'node:assert'
import { promisify } from 'node:util'
import { makeTask } from '../factory/task.js'
import TaskCreate from '../../src/services/TaskCreate.js'


const testPort = 9010
let id;

await test('Update Task', async (t) => {

  process.env.PORT = testPort

  const { server } = await import('../../src/server.js')

  const testServerAddress = `http://localhost:${testPort}`


  const create = new TaskCreate();

  const task = makeTask();

  const item = create.handle(task);

  id = item.id;

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

  await promisify(server.close.bind(server))()

})