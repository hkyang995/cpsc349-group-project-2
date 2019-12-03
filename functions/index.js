// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const app = require('express')();   // Express
const FBAuth = require('./util/fbAuth');

// const cors = require('cors');
// app.use(cors());

const { db } = require('./util/admin');

const {
  signup,
  login
} = require('./handlers/users');

// users routes
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.region('us-central1').https.onRequest(app);
