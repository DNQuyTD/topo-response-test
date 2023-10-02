'use strict'
// !dmbg
const { model, Schema, Types } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Response'
const COLLECTION_NAME = 'Responses'

// Declare the Schema of the Mongo model
var responseSchema = Schema({
    method:{
        type:String,
        required:true,
        enum: ['get', 'post', 'patch', 'delete'],
    },
    path:{
        type:String,
        required:true,
        trim:true,
    },
    httpCode:{
        type:String,
        required:true,
    },
    response: {
        type:String,
        required:true,
    }
}, {
    timestamps: false,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = model(DOCUMENT_NAME, responseSchema);