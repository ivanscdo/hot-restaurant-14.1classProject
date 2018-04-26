// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [{
  name: "Amy",
  phone: 1234,
  email: "astwefs",
  unique: "amys"

}];

// var waitlist = [{
//     name: "AmyWAIT",
//     phone: 567,
//     email: "astwefsWAIT",
//     unique: "amysWAIT"
  
//   }];

// var waitlist = reservations.slice(5, reservations.length);
var waitlist = [];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "/Public/home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });


// Create New Reservations - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newReservation.slice(0,4));
console.log(newReservation);


//   reservations.push(newReservation.slice(0,4));
// reservations.push(newReservation);

if (reservations.length <= 5) {
    // waitlist.push(reservations.slice(5, reservations.length));
    reservations.push(newReservation);
} else {
    waitlist.push(newReservation);
}



//   res.json(newReservation.slice(0,4));
res.json(newReservation);

});

//create waitlist - use slice (5, reservations.length)
app.post("/api/waitlist", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
//   var newWaitlist = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newWaitlist.name = newWaitlist.name.replace(/\s+/g, "").toLowerCase();

// //   console.log(waitlist.slice(5, reservations.length));
//   console.log(reservations.slice(5, reservations.length));



// //   reservations.push(waitlist.slice(5, reservations.length));
//   waitlist.push(reservations.slice(5, reservations.length));



//   res.json(waitlist.slice(5, reservations.length));
  res.json(waitlist);

});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
