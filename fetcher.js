const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  if (response.statusCode !== 200) {
    console.log("Status Code was not 200");
    process.exit();
  }
  fs.access(args[1], (err) => {
    if (err) {
      console.log("local file path is invalid");
      throw err;
    }
    fs.writeFile(args[1], body, (err2) => {
      if (err2) {
        console.log("error!");
        throw err;
      }
    });
  });
});

