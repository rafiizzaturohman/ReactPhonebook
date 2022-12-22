const express = require('express');
const router = express.Router();
const models = require('../models')
const { Response } = require('../helpers/util')
const { Op } = require('sequelize')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const { page, name, phone } = req.query

    const limit = 9
    const offset = (page - 1) * limit

    const total = await models.User.count()
    const pages = Math.ceil(total / limit)

    if (name && phone) {
      const users = await models.User.findAll({
        limit,
        offset,
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${name}%`
              }
            },
            {
              phone: {
                [Op.iLike]: `%${phone}%`
              }
            }
          ]
        },
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response({ users, page: Number(page), pages }))

    } else if (name) {
      const users = await models.User.findAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              name: {
                [Op.iLike]: `%${name}%`
              }
            }
          ]
        },
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response({ users, page: Number(page), pages }))
    } else if (phone) {
      const users = await models.User.findAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              phone: {
                [Op.iLike]: `%${phone}%`
              }
            }
          ]
        },
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response({ users, page: Number(page), pages }))

    } else {
      const users = await models.User.findAll({
        limit,
        offset,
        order: [
          ['name', 'ASC']
        ]
      })

      res.json(new Response({ users, page: Number(page), pages }))
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
