const needle = require("needle");
const fs = require("fs");

const url = process.argv[2];
const localPath = process.argv[3];

needle.get(url, (error, response, body) => {
  if (error) {
    console.log("Error:", error);
    return;
  }

  if (response.statusCode === 200) {
    fs.writeFile(localPath, body, (err) => {
      if (err) {
        console.error("Error:", err);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);  
    }); 
  }
  // console.log("statusCode:", response && response.statusCode);
  // console.log("body:", body);

   
});