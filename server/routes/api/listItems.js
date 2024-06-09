const express = require("express");
const {
  getListItems,
  getListItem,
  createListItem,
  deleteListItem,
  updateListItem,
} = require("../../controllers/listItemController");

const router = express.Router();

//@route GET api/list
// @desc get all list items
router.get("/", getListItems);

//@route GET api/list-item
// @desc get a single list items
router.get("/:id", getListItem);

//@route POST api/list-item
// @desc add an item
router.post("/", createListItem);

//@route DELETE api/list-item
// @desc delete an list item
router.delete("/:id", deleteListItem);

//@route PATCH api/list-item
// @desc update an list item
router.patch("/:id", updateListItem);

module.exports = router;
