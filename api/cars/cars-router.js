// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router();

router.get('/', (req, res) => {
 Cars.getAll()
 .then(cars => {
    res.json(cars)
 }).catch(err =>
    res.json({message: err.message, stack: err.stack}))
})

router.post('/', (req, res) => {
    Cars.create(req.body)
    .then(newCarEntry => {
      res.status(201).json(newCarEntry);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to create car: ${err.message}` });
    });

})

router.get('/:id', (req, res) => {
    Cars.getById(req.params.id)
    .then(car => {
        res.json(car)
    })
    .catch(err => {
        res.json(err)
    })
})


module.exports = router;