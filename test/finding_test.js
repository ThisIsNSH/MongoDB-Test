const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Fnding records',function(){

	var char;
	beforeEach(function(done){
		char = new MarioChar({
			name: 'Mario'
		});	

		char.save().then(function(){
			done();
		});
	});
		
	//create tests
	it('Find one record from the database',function(done){
			MarioChar.findOne({name: 'Mario'}).then(function(result){
				assert(result.name === 'Mario');
				done();
			});
	});

	it('Find one record by id from the database',function(done){
			MarioChar.findOne({_id: char._id}).then(function(result){
				assert(result._id.toString() === char._id.toString());
				done();
			});
	});

});