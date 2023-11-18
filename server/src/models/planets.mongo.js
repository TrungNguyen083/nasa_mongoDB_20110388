const mongose = require('mongoose')

const planetSchema = new mongose.Schema({
    keplerName: {
        type: String,
        required: true,
    }
});

module.exports = mongose.model('Planet', planetSchema);;