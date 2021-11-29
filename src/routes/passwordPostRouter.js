import express from 'express'
import bodyParser from 'body-parser'
import { encrypt, fillTo16Chars } from '../pswHandler'
import { usersCollection } from '../db'

const router = express.Router()

router.post('/', bodyParser.json(), handlePost)

function handlePost(req, res) {
    const uname = req.body.username
    const pwd = fillTo16Chars(req.body.password)
    
    if (uname && pwd) {
        res.sendStatus(200)

        usersCollection.findOne().then((user) => console.log(user))
        addUser(uname, pwd)
    }
    else res.sendStatus(400)
}

function addUser(username, password) {
    usersCollection.findOne({userName: username}).then((doc) => {
        if (!doc) {
            const newUser = 
            {
                userName: username,
                password: encrypt('updateUserPassword123', password)
            }
            usersCollection.insertOne(newUser, () => console.log(newUser))
        }
    })
}

export default router