const router = require('express').Router()
const Cryptids = require('./cryptids-model')

router.post('/', (req, res, next) => {
  Cryptids.addCryptids(req.body)
    .then(data => res.json(data))
    .catch(next)
});

router.put('/', (req, res, next) => {
  Cryptids.updateCryptids(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

router.get('/', (req, res, next) => {
  Cryptids.getOne()
    .then(data => {
      res.json(data)
    })
    .catch(next)
})

router.get('/getall', (req, res, next) => {
  Cryptids.getAll()
    .then(data => {
      res.json(data)
    })
    .catch(next)
})

module.exports = router;
