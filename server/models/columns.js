const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const columnsSchema = new Schema({
  applied: {
    title: "APPLIED",
    taskIds: [],
  },
  priority: {
    title: "PRIORITY",
    taskIds: [],
  },
  interview: {
    title: "APPLIED",
    taskIds: [],
  },
  offer: {
    title: "APPLIED",
    taskIds: [],
  },
  inactive: {
    title: "APPLIED",
    taskIds: [],
  },
});

const Columns = mongoose.model("Columns", columnsSchema);

module.exports = Columns;
