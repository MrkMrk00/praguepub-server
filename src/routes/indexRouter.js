import express from 'express'

const router = express.Router(),
    path = process.cwd()

router.get('/', async (req, res) => {
    console.log('tvoje asdasdasd')
    res.sendFile(path + '/views/index.html')
})

export default router