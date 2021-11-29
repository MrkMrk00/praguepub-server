import express from 'express'

import indexRouter from './routes/indexRouter'
import postInfoRouter from './routes/postInfoRouter'

const app = express(),
    path = process.cwd(),
    port = 3021

app.use('/', indexRouter)
app.use('/register', postInfoRouter)

app.use('/public', express.static(path + '/public'))

app.listen(port, () => {
    console.log('listening on port ' + port)
})