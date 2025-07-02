//figlet is a node.js package that allows you to create ASCII art text using various fonts.
var figlet = require("figlet");

figlet("uday", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

exports = figlet;

