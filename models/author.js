const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model


const BooksSchema = new Schema({
	title: String,
	pages: Number,
});

const AuthorSchema = new Schema({
	name: String,
	age: Number,
	books: [BooksSchema]
});

// author is the collection and MarioCharScheman is the sceme followed
const Author = mongoose.model('author',AuthorSchema);

module.exports = Author;
