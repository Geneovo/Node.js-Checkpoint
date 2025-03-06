const fs = require("fs");

// Create a file and write "Hello Node" inside
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) throw err;
    console.log("File created successfully!");
});

// Read and log content from "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
});