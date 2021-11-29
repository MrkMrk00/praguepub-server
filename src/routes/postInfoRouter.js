import express from 'express'
import bodyParser from 'body-parser'
import { encrypt, fillTo16Chars } from '../pswHandler'

const router = express.Router(),
    path = process.cwd()

router.post('/', bodyParser.json(), handlePost)

function handlePost(req, res) {
    if (req.body.username && req.body.password) {
        res.send(200)
        console.log(req.body.password)
        console.log(fillTo16Chars(req.body.password))
        console.log(encrypt('funguje to', fillTo16Chars(req.body.password)))
    }
    else res.send(400)
}

export default router