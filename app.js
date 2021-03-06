const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect to MongoDB
mongoose.connect(config.database);

// Let's me know that I'm connected to the Database
mongoose.connection.on('connected', function() {
  console.log('Connected to database ' + config.database);
});

// Let's me know that that there is a connection error to Database
mongoose.connection.on('error', function(err) {
  console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = process.env.PORT;

// Cors Middleware
app.use(cors());

// Set Static Angular 2 Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', function(req, res) {
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, function() {
  console.log('Server started on port ' + port);
})
