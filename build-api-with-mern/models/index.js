let mongoose = require('mongoose');
// This is where we serve our DB!
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/build-api-with-mern'
);


let Post = require("./posts")


module.exports.Post = Post;
