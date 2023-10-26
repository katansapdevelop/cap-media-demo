const path = require('path');
const fs = require('fs');
const { readFile } = require('node:fs/promises');
const mime = require('mime');
const stringify = require('csv-stringify');

const testDataPath = '../test';
const directoryPath = path.join(__dirname, testDataPath);
console.log("Reading files from: " + directoryPath);

const  generateCSV = async ()  =>  {
fs.readdir(directoryPath, async (err, files) =>  {
    let csvData = [];
    let id = 0;  // Default to 0

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    // Keep only png files
    files = files.filter((file) => file.endsWith(".png") );

    // Add Header line to CSV 
    csvData.push(["id","content","mediaType","fileName","applicationName" ]);
    
    
    
    console.log("Found the following files: "); 
    for (let i = 0; i < files.length; i++) {
        let fileName = files[i];
        id++;
        let filePath = path.join(directoryPath, fileName);
        let mimeType = mime.getType(filePath);
        console.log(filePath + " " + mimeType ); 
        
        let contents = await readFile(filePath);
        let contentBase64 = contents.toString('base64');

        // Add header line
        csvData.push([id, contentBase64, mimeType, fileName,"demo content" ]);
    };

    
    // Convert file to CSV and write test file
    stringify.stringify(csvData, (err, output) => {
        if (err) {
          console.error('Error:', err);
          return;
        }
      
        // Specify the file path where you want to save the CSV
        let filePath = path.join(directoryPath, './data/sap.capire.media-Media.csv');
      
        // Write the CSV to a local file
        fs.writeFile(filePath, output, (err) => {
          if (err) {
            console.error('Error writing to file:', err);
          } else {
            console.log(`CSV saved to ${filePath}`);
          }
        });
      });

});
}

generateCSV();