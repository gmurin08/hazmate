const mongoose = require('mongoose');
const User = mongoose.model('user');
const Shipment = mongoose.model('shipment')

const createShipment = async(req,res)=>{
    //User.find({user with user id})
    const id = req.body.uid
    const user = await User.findById(id);
    //Shipment.create shipment with info
    Shipment.create({
        unNumber:req.body.unNumber,
        weight_haz: req.body.weight_haz,
        user: req.body.uid
    }, (e,shipment) =>{
        if (e){
            return res.status(400).json(e)
        }else{
            user.shipments.push(shipment)
            user.save()
            console.log(user)
            return res.status(201).json(user)
        }
    }
    )
    //res with shipment info or error
}

const shipmentsFindAll = async(req,res)=>{
    //get user id and return all users shipments
    const id = req.body.uid
    const user = await User.findById(id);
    return res.status(200).json(user.shipments)
}

const shipmentFindById = async(req,res)=>{
    //get shipment id from req body
    //user.find user with that id
    //res with user shipment if exists in list
}

const shipmentUpdate = async(req,res)=>{
    //get shipment id from req body
    //Shipment.findandupdate shipment with that id
    //res with the updated shipment
}

const shipmentDelete = async(req, res)=>{
    // get user id and shipment id from req body
    // user.find user with that id
}

module.exports = {
    shipmentDelete,
    shipmentFindById,
    shipmentUpdate,
    shipmentsFindAll,
    createShipment}