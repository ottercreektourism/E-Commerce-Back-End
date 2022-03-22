const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // TODO: be sure to include its associated Products ORM Day 1 59:40
  // put everything inside a {} inside findAll().
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // TODO: be sure to include its associated Products. see ORM Day 1 59:40
  Category.findByPk(re.params.id).then((categoryData) => {
    res.json(categoryData);
  })
});

router.post('/', (req, res) => {
  // create a new category
  // use create() to add new row to the Category table
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  })
  .then((newCategory) => {
    // send the newly created row as a json object
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.body.id,
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.body.id
      },
    }
  )
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;



// To create multiple categories, see ORM Day 1 55:40
