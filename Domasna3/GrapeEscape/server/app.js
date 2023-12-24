const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Winery = require('../server/models/Winery');
const csvtojson = require('csvtojson');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/grapeescape', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // ... rest of the code ...
});

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // or the origin of your React app
  credentials: true, // enable cookies and authentication headers
};

app.use(cors(corsOptions));
app.use(express.json()); // Add this line to parse JSON requests
app.use(express.urlencoded({ extended: true }));

// Configure Express Session
app.use(session({
  secret: 'secretkey',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false, // Allow cookies to be sent cross-origin
    secure: false, // Set to true if using HTTPS
  },
}));

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ... other middleware ...

// Routes
app.get("/api", async (req, res) => {
  try {
    // Fetch data from MongoDB
    const wineries = await Winery.find();
    res.json({ wineries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
