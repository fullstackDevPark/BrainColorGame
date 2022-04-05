import {MongoClient} from 'mongodb'
import { connectionString} from '$lib/dbURL'
import {nanoid} from 'nanoid'

/* npm install mongodb */
/* npm install nanoid */

const uri = connectionString

export async function get(request) {
  const client = new MongoClient(uri)
  let scoreList = []
  try {
    await client.connect()
    const db = client.db('brainColor')

    scoreList = await db.collection('score')
                        .find()
                        .sort( {score: -1})
                        .limit(10)
                        .toArray()
    return {
      status: 200,
      body: {
        list: scoreList
      }
    }
  } catch(e) {
    return {
      status: 500,
      body: {
        list: [],
        msg: e.msg
      }
    }
  } finally {
    await client.close()
    console.log('테이터베이스 close')
  }
}

export async function put(request) {
  const client = new MongoClient(uri)
  let rtn = {}
  let score = JSON.parse(request.body)

  if(!score.name || !score.score) {
    console.log(score)
    throw 'Bad request'
  }
  score['_id'] = nanoid()

  try {
    await client.connect()
    const db = client.db('brainColor')
    rtn = await db.collection('score').insertOne(score)
    return {
      status: 200,
      body: {
        result: rtn
      }
    }
  } catch(e) {
    return {
      status: 500,
      body: {
        msg: e.message
      }
    }
  } finally {
    await client.close()
    console.log('DB Close')
  }
}