import express from 'express'
import bodyParser from 'body-parser'
import { encrypt, fillTo16Chars } from '../pswHandler'
import { usersCollection } from '../db'

const router = express.Router()

router.post('/', bodyParser.json(), handlePost)

/**
 * Metoda pracuje s příchozím POST requestem
 * @param {*} req request
 * @param {*} res response
 */
function handlePost(req, res) {
    const uname = req.body.username
    //heslo je doplněno (oříznuto) do 16 charakterů pro potřeby zašifrování
    const pwd = fillTo16Chars(req.body.password)

    if (uname && pwd) {

        addUser(uname, pwd, (msg) => {
            res.json({message: msg})
        })
    }
}

function addUser(username, password, callback) {
    usersCollection.findOne({userName: username}).then((doc) => {
        if (!doc) {
            const newUser =
            {
                userName: username,
                password: encrypt('sgmKC57csTEesGES', password)
            }
            usersCollection.insertOne(newUser, (err, res) => {
                if (err) {
                    callback('nepodarilo se pridat uzivatele')
                }
                else callback(`pridan uzivatel ${newUser.userName}`)
            })
        }
        else callback('uživatel již existuje')
    })
}

export default router
