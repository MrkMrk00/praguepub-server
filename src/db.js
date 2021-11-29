import { MongoClient } from 'mongodb'

const conString = 'mongodb+srv://marek:123456abc@cluster0.g7yxo.mongodb.net'
export let usersCollection

export function connect(callback) {
    MongoClient.connect(conString, (err, client) => {
        usersCollection = client.db('users').collection('users')
        callback()
    })    
}

export function close() {
    mongodb.close()
}