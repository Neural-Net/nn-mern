import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'

import Resource from './models/resource'

const app = express()
const router = express.Router()

const API_PORT = process.env.API_PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))

mongoose.connect('mongodb://localhost:27017/resources')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('connection successful')
})

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

router.get('/resources', (req, res) => {
  Resource.find((err, resources) => {
    if (err) return res.json({ success: false, error: err })
    return res.json({ success: true, data: resources })
  })
})

router.post('resources', (req, res) => {
  const resource = new Resource()
  const { title, mediaSrc, description } = req.body
  if (!title || !mediaSrc || !description) {
    return res.json({
      success: false,
      error: 'You must provide a title, mediaSrc source, and description'
    })
  }

  resource.title = title
  resource.mediaSrc = mediaSrc
  resource.description = description
  resource.save(err => {
    if (err) return res.json({ success: false, error: err })
    return res.json({ success: true })
  })
})

app.use('/api', router)

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))
