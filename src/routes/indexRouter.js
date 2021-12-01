import express from 'express'

const router = express.Router(),
    path = process.cwd()

router.get('/', async (req, res) => {

    //Je posílána pouze statická html stránka
    res.sendFile(path + '/views/index.html')
})

export default router