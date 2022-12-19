const express = require('express');
const router = express.Router();
const models = require('../models')
const { Response } = require('../helpers/util')
const { Op } = require('sequelize')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const { name, phone } = req.query

    if (name && phone) {
      const users = await models.User.findAll({
        where: {
          [Op.or]: [
            { name: name },
            { phone: phone }
          ]
        },
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response(users))

    } else if (name) {
      const users = await models.User.findAll({
        where: {
          [Op.and]: [
            { name: name }
          ]
        },
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response(users))
    } else if (phone) {
      const users = await models.User.findAll({
        where: {
          [Op.and]: [
            { phone: phone }
          ]
        },
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response(users))


    } else {
      const users = await models.User.findAll({
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response(users))
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

router.post('/', async (req, res, next) => {
  try {
    const users = await models.User.create(req.body)

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
