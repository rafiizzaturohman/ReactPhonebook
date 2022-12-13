var express = require('express');
var router = express.Router();
var models = require('../models')
var { Response } = require('../helpers/util')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await models.User.findAll()

    res.json(new Response(users))
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

router.post('/', async (req, res, next) => {
  try {
    const users = await models.User.create(req.body)

    console.log(users)
    res.json(new Response(users))
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const users = await models.User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })

    res.json(new Response(users[1]))
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const users = await models.User.destroy({
      where: {
        id: req.params.id
      }
    })

    res.json(new Response(users))
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

module.exports = router;
