const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColumnOrderSchema = new Schema({

});

const ColumnOrder = mongoose.model("ColumnOrder", ColumnOrderSchema);

module.exports = ColumnOrder;