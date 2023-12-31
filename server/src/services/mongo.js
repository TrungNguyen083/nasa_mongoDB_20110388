const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = proccess.env.MONGO_URL;

mongoose.connection.once('open', ()=>{
    console.log('MongoDB connection ready');
})

mongoose.connection.on('error',(err)=>{
    console.log(err);
})

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDissconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDissconnect
}