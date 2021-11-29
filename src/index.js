import express from 'express'
import { connect as connectDB } from './db'
import indexRouter from './routes/indexRouter'
import postInfoRouter from './routes/passwordPostRouter'

const app = express(),
    path = process.cwd(),
    port = 3021

app.use('/', indexRouter)
app.use('/register', postInfoRouter)

app.use('/public', express.static(path + '/public'))

connectDB(() => {
    app.listen(port, () => {
        console.log('listening on port ' + port)
    })
})
