const router = require('express').Router();
const { Category, Product } = require('../../models');
// TODO: add products
// TODO: determine whether async await is needed. ORM Day 1:21:23

// TODO: Figure out whether categorySeeds.js file is needed. See ORM Day 1 1:30:00

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // TODO: be sure to include its associated Products ORM Day 1 59:40
  // put everything inside a {} inside findAll().
  try {
    const categoryData = await Category.findAll()
    if (!categoryData.length) return res.status(404).json([]);
      return res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
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
