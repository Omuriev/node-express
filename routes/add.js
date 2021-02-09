const { Router } = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить курсы',
    isAdd: true
  })
})

router.post('/', async (req, res) => {
  const course = new Course(req.body.title, req.body.prcie, req.body.img)

  await course.save();
  res.redirect('/courses')
})

module.exports = router;