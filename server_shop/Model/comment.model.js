var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        idProduct: String,
        idUser: String,
        fullname: String,
        content: String,
        star1: String,
        star2: String,
        star3: String,
        star4: String,
        star5: String,
    }
);

var Comment = mongoose.model('Comment', schema, 'comment');

module.exports = Comment;