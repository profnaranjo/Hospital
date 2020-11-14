var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
// mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app");

//Changed by Eduardo Naranjo
//mongoose.connect('mongodb://localhost:27017/nhs-app');

mongoose.connect('mongodb+srv://user1:<password>@cluster0.rhhqn.mongodb.net/<dbname>?retryWrites=true&w=majority');

module.exports = {mongoose};
