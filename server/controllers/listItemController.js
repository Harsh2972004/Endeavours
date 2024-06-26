const ListItem = require("../models/listItemsModel");
const mongoose = require("mongoose");

// get all list items
const getListItems = async (req, res) => {
  const user_id = req.user._id;
  try {
    const listItems = await ListItem.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(listItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all list items in specific category
const getCategoryListItems = async (req, res) => {
  const { category } = req.params;
  const user_id = req.user._id;
  try {
    const listItems = await ListItem.find({ user_id, category }).sort({
      createdAt: -1,
    });
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
    const listItem = await ListItem.findById(id).exec();

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
  const { title, listBody, category } = req.body;
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
    const user_id = req.user._id;
    const listItem = await ListItem.create({
      title,
      listBody,
      user_id,
      category,
    });
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
    const updatedListItem = await ListItem.findOne({ _id: listItem._id });
    res.status(200).json(updatedListItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getListItems,
  getCategoryListItems,
  getListItem,
  createListItem,
  deleteListItem,
  updateListItem,
};
