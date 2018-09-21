import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ResourceSchema = new Schema({
  title: String,
  mediaSrc: String,
  description: String
}, { timestamps: true })

export default mongoose.model('Resource', ResourceSchema)
