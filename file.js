
const fs=require('fs');
//write file
const date = Date.now();

const stream = fs.createWriteStream('./timestamp/current-date-time.txt');

stream.write(date.toString(),'utf-8');

stream.end();
//read file
fs.readFile('./timestamp/current-date-time.txt',"utf-8",(err,data)=>{
    console.log(data)
})