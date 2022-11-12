const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    unNumber:String,
    isBulk:Boolean,
    hazardClass:String,
    user: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    weight_total: Number,
    weight_haz: Number

})

shipmentSchema.methods.assignUser = function(user){
    this.user = user
}

module.exports = mongoose.model('shipment', shipmentSchema)