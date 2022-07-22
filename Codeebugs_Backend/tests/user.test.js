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

describe('User Schema test For inserting', () => {
    // Testing for inserting student 
     it('Add User testing inserting', () => {
     const user = {
     'full_name': 'Hari Bahadur',
     'email' : "harisharma@gmail.com",
     'age' : "10",
     'password': 'harisharma'
     };
     return User.create(user)
     .then((pro_ret) => {
     expect(pro_ret.full_name).toEqual('Hari');
     });
     });

     //Test for updating student / user
     it('Test for user update', async () => {
        return User.findOneAndUpdate({_id :Object('614f2f76d5abdb3b943b85a1')}, 
       {$set : {full_name:'Hari Bahadur'}})
        .then((pp)=>{
        expect(pp.full_name).toEqual('Madan Bahadur')
        })
        
       });
    })