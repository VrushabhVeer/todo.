const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user_id: { type: String, required: true },
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {
  TodoModel,
};
