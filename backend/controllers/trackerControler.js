const mongoose = require("mongoose");
const Item = require("../models/itemModel");

// GET all items
const getItems = async (req, res) => {
  const user_id = req.user._id;
  const items = await Item.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(items);
};

// GET a single item
const getItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Record does not exist" });
  } else {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: "Record does not exist" });
    } else {
      res.status(200).json(item);
    }
  }
};

// POST an item
const postItem = async (req, res) => {
  const { trackerType, source, amount, description } = req.body;

  let emptyFields = [];

  if (!source) {
    emptyFields.push("source");
  }

  if (!amount) {
    emptyFields.push("amount");
  }

  if (!description) {
    emptyFields.push("description");
  }

  if (!trackerType) {
    emptyFields.push("trackerType");
  }

  console.log(emptyFields);
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const user_id = req.user._id;
    const item = await Item.create({
      trackerType,
      source,
      amount,
      description,
      user_id,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE an item
const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Record does not exist" });
  } else {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ error: "Record does not exist" });
    } else {
      res.status(200).json(item);
    }
  }
};

// UPDATE an item
const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Record does not exist" });
  } else {
    const item = await Item.findByIdAndUpdate({ _id: id }, { ...req.body });
    if (!item) {
      return res.status(404).json({ error: "Record does not exist" });
    } else {
      res.status(200).json(item);
    }
  }
};

module.exports = {
  getItems,
  getItem,
  postItem,
  deleteItem,
  updateItem,
};
