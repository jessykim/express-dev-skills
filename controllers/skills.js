import { skills } from "../data/skills";

function index(req, res) {
  res.render('skills/index', {
    skills: skills
  })
}