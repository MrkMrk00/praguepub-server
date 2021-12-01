import { MongoClient } from 'mongodb'

const conString = 'mongodb+srv://marek:123456abc@cluster0.g7yxo.mongodb.net'
export let usersCollection
export let mongoClient

export function connect(callback) {
    MongoClient.connect(conString, (err, client) => {
        if (err) {
            console.log('failed to connect to mongodb')
            return
        }
        usersCollection = client.db('users').collection('users')
        mongoClient = client
        callback()
    })    
}

export function close() {
    mongodb.close()
}