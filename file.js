const fs = require("fs");

// Creating the file "welcome.txt"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File "welcome.txt" created!');
});

// Reading the file "welcome.txt" and logging its content
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content of "welcome.txt":', data);
});
