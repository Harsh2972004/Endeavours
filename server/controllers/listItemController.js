const ListItem = require("../models/listItemsModel");
const mongoose = require("mongoose");

// get all list items
const getListItems = async (req, res) => {
  try {
    const listItems = await ListItem.find({}).sort({ createdAt: -1 });
    res.status(200).json(listItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single list item
const getListItem = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "no such list item found" });
    }
    const listItem = await ListItem.findById(id);

    if (!listItem) {
      return res.status(404).json({ error: "no such list item" });
    }
    res.status(200).json(listItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create a list item
const createListItem = async (req, res) => {
  const { title, listBody } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!listBody) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //   add doc to db
  try {
    const listItem = await ListItem.create({ title, listBody });
    res.status(200).json(listItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a list item
const deleteListItem = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "no such list item" });
    }

    const listItem = await ListItem.findOneAndDelete({ _id: id });

    if (!listItem) {
      return res.status(404).json({ error: "no such list item" });
    }

    res.status(200).json(listItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a list item
const updateListItem = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "no such list item" });
    }

    const listItem = await ListItem.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!listItem) {
      return res.status(404).json({ error: "no such list item" });
    }

    res.status(200).json(listItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getListItems,
  getListItem,
  createListItem,
  deleteListItem,
  updateListItem,
};
