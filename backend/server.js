import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import dbSeed from '../seeds/resources.json'

import Resource from './models/resource'
import { isNullOrUndefined } from 'util';

const app = express()
const router = express.Router()

const API_PORT = process.env.API_PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))

mongoose.connect('mongodb://localhost:27017/nn-mern')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('connection successful')
})


db.collection('resources').countDocuments(function(err, count) {
  console.dir(err);
  console.dir(count);

  if( count == 0) {
      console.log("No Found Records.");

      //const seeds = dbSeed;
      for (var seed of dbSeed){
        console.log(seed, 'seed')
        const resource = new Resource(seed);
        resource.save();
       /* const { title, mediaSrc, description } = seed.body;
        if (!title || !mediaSrc || !description) {
          return res.json({
            success: false,
            error: 'You must provide a title, mediaSrc source, and description'
          })
        }

        resource.title = title;
        resource.mediaSrc = mediaSrc;
        resource.description = description;
        resource.save(err => {
          if (err) return res.json({ success: false, error: err })
          return res.json({ success: true })
        })*/
      }
      //db.collection('resources').data = seed;
  }
  else {
      console.log("Found Records : " + count);
  }
})


router.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
  //res.json({ message: 'test' })s

  
})

router.get('/resources', (req, res) => {
  let db = req.db

  Resource.find((err, resources) => {
    if (err) return res.json({ success: false, error: err })
    return res.json({ success: true, data: resources })
  })
})

router.post('/resources', (req, res) => {
  let db = req.db
  
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
