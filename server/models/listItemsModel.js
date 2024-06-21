const mongoose = require("mongoose");

const listItemsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    listBody: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["personal", "group", "priority"],
      default: "personal", // Default category if not specified
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ListItem", listItemsSchema);
