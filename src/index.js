import express from 'express'
import router from './routes/indexRouter'

const app = express(),
    path = process.cwd(),
    port = 3021

app.use('/', router)
app.use('/public', express.static(path + '/public'))



app.listen(port, () => {
    console.log('listening on port ' + port)
})