const {connect} = require('./client');

const net = require("net");
const { stdin } = require('process');

// setup interface to handle user input from stdin
// \u0003 maps to ctrl+c input

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); 
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  }          
};

setupInput();
handleUserInput();




