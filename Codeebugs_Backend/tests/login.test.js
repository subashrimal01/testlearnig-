//using the path of User Model
const User = require('../models/student');
const mongoose =  require('mongoose');

// using abs_test as the test database
const url = 'mongodb://localhost:27017/abs_test';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('User Schema test for user login', () => {
    // Testing for inserting student 
     it('Add User testing inserting', () => {
     const user = {
     
     'email' : "harisharma@gmail.com",
     'password': 'harisharma'
     };
     return User.findOne(user)
     .then((pro_ret) => {
     expect(pro_ret.email).toEqual('harisharma@gmail.com');
     });
     });
    })