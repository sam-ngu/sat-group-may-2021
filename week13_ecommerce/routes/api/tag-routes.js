const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

function catch500Error(res, err) {
    res.status(500).json({
        error: err,
    });
}

// The `/api/tags` endpoint

router.get("/", (req, res) => {
    // find all tags
    // be sure to include its associated Product data

    Tag.findAll({
        include: [{ model: Product, as: "tags" }],
    })
        .then((tags) => {
            res.json(tags);
        })
        .catch((err) => {
            catch500Error(res, err);
        });
});

router.get("/:id", (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    Tag.findByPk(req.params.id, {
        include: [{ model: Product, as: "tags" }],
    })
        .then((tags) => {
            res.json(tags);
        })
        .catch((err) => {
            catch500Error(res, err);
        });
});

router.post("/", (req, res) => {
    // create a new tag
    /* req.body should look like this...
    {
      tag_name: "Basketball",
    }
  */
    Tag.create({
        tag_name: req.body.tag_name,
    })
        .then((tag) => {
            res.json(tag);
        })
        .catch((err) => {
            catch500Error(res, err);
        });
});

router.put("/:id", (req, res) => {
    // update a tag's name by its `id` value
    /* req.body should look like this...
    {
      tag_name: "Basketball",
    }
  */

    Tag.update(
        {
            tag_name: req.body.tag_name,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updated) => {
            res.json(updated);
        })
        .catch((err) => {
            catch500Error(res, err);
        });
});

router.delete("/:id", (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            res.json({
                data: "success",
            });
        })
        .catch((err) => {
            catch500Error(res, err);
        });
});

module.exports = router;
