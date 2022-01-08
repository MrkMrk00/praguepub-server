import { MongoClient } from 'mongodb'

const conString = 'mongodb+srv://guest:w22dY4DAJ7c2Rzf@cluster0.g7yxo.mongodb.net'
export let usersCollection
export let mongoClient

export function connect(callback) {
    MongoClient.connect(conString, (err, client) => {
        if (err) {
            console.log('failed to connect to mongodb')
            return
        }
        usersCollection = client.db('prague_pub').collection('uzivatele')
        mongoClient = client
        callback()
    })
}

export function close() {
    MongoClient.close()
}
