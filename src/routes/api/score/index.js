import {MongoClient} from 'mongodb'
import { connectionString} from '$lib/dbURL'

/* npm install mongodb */

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