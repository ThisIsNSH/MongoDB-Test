const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/Author');

//Describe our tests
describe('Nesting records',function(){

	beforeEach(function(done){
		mongoose.connection.collections.authors.drop(function(){
			done();
		});
	});


	//create tests
	it('Creates an author with sub-documents',function(done){

		var pat = new Author({
			name: 'Patrik Rothfuss',
			books: [{title: 'Name of the Wind', pages: 400}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Patrik Rothfuss'}).then(function(record){
				assert(record.books.length === 1);
				done();
			});
		});

	});

	it('Adds a book to the author', function(done){
		var pat = new Author({
			name: 'Patrik Rothfuss',
			books: [{title: 'Name of the Wind', pages: 400}]
		});

		pat.save().then(function(){
				Author.findOne({name: 'Patrik Rothfuss'}).then(function(record){
				record.books.push({title: 'Wise Mans Fear',pages:400});
				record.save().then(function(){
					Author.findOne({name: 'Patrik Rothfuss'}).then(function(result){
						assert(result.books.length == 2);
						done();
					});
				});
			});	
		});	
	});


});
