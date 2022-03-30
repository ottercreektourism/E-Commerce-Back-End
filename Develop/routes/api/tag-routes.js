const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    })
    if (!tagData.length) return res.status(404).json([]);
    return res.json(tagData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: { id: req.params.id },
    include: [{ model: Product, through: ProductTag }]
  }).then((tagData) => {
    res.json(tagData);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      id: req.body.id,
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.body.id
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
