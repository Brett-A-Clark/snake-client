// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); 
  return stdin;
};


// \u0003 maps to ctrl+c input
const handleUserInput = (input) => {
  if (input === 'w') {
    connection.write("Move: up");
  }
  if (input === 'a') {
    connection.write("Move: left");
  }
  if (input === 's') {
    connection.write("Move: down");
  }
  if (input === 'd') {
    connection.write("Move: right");
  }  
  if ( input === 'q') {
    connection.write("Say: Hello");
  }
  if (input === '\u0003') {
    process.exit();
  }          
};


module.exports = { setupInput };  