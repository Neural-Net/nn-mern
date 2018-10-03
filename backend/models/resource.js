import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ResourceSchema = new Schema({
  title: String,
  type: String,
  mediaLocation: String,
  mediaSrc: String,
  mediaType: String,
  description: String,
  platform: String,
  recommendedAges: String,
  summary: String,
  subjects: String,
  ccTags: Array,
  connections: Array
}, { timestamps: true })

export default mongoose.model('Resource', ResourceSchema)
