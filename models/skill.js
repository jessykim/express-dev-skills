import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  week: Number,
  unit: Number,
  keyword: String,
  covered: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}