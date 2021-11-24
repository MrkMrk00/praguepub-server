import express from 'express'

const router = express.Router(),
    path = process.cwd()

router.get('/', (req, res, next) => {
    res.sendFile(path + '/views/index.html')
})

export default router