const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
let dataJSON = dataBuffer.toString();

let data = JSON.parse(dataJSON);
data.name = 'Adrian';
data.age = 23;

dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON);

console.log(dataJSON);