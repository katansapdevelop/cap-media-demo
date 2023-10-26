# CAP Media Demo

A simple demo project to demonstrate how to incorporate media in a CAP App

This was copied and modified from the [CAP Cloud Samples](https://github.com/SAP-samples/cloud-cap-samples/tree/main/media)


## Running the project
- Open a new terminal and run `cds watch` 
- Test Data CSV has already been created 

## Running the Test Cases (.http files)
Requires REST Client for VS Code [humao.rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

 ![Media Content from Service](/images/Image3.png)


## Running the CSV generator
- Open a terminal and run `npm run csv-gen`
- This script will read the contents of the `test` directory looking for `.png` image files
- It will then replace the contents of `test\data\sap.capire.media-Media.csv` with details of the files loaded from the `test` directory including the base 64 encoded content

**Note will not run unless you run `npm install` in the `csv-generator` directory**

