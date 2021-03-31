const mongoose = require('mongoose');

const WidgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    }
}, { timestamps: true })

const Widget = mongoose.model("widget", WidgetSchema);

module.exports = Widget;
    