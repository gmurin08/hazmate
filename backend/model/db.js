const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const dbURI = process.env.DB_URI

const connect = () =>{
    mongoose.connect(process.env.DB_URI, ()=>{
        console.log( String.fromCodePoint(0x1F680)+
        '\x1b[33m Connected to AtlasDB Cloud Server \x1b[0m')
    })
    
}

connect();

require('./shipment')
require('./user')
