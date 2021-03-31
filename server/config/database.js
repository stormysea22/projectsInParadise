// const mongoose = require('mongoose'),
//     db = process.env.DB_URI;

// const database = mongoose.connect(`${db}`, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }) 
//     .then(() => console.log(`Connected to MongoDB ${database.name} at ${database.host}:${database.port}`))
//     .catch(err => console.log('Meltdown!', err))

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});