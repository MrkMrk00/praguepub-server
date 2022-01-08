import express from 'express'
import { connect as connectDB } from './db'
import indexRouter from './routes/indexRouter'
import postInfoRouter from './routes/passwordPostRouter'
import morgan from 'morgan'
import chalk from 'chalk'

const app = express(),
    path = process.cwd(),
    port = 3021

const morganChalk = morgan(function (tokens, req, res) {
    return [
        chalk.green.bold(tokens.method(req, res)),
        chalk.red.bold(tokens.status(req, res)),
        chalk.white(tokens.url(req, res)),
        chalk.yellow(tokens['response-time'](req, res) + ' ms'),
    ].join(' ')
})

app.use(morganChalk)
app.use('/', indexRouter)
app.use('/register', postInfoRouter)

app.use('/public', express.static(path + '/public'))

connectDB(() => {
    app.listen(port, () => {
        console.log('listening on port ' + port)
    })
})
