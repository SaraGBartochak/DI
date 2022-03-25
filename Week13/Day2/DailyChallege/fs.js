const express = require('express')
const fs = require('fs');
const dotenv = require('dotenv')

const app = express();
dotenv.config();

app.use(express.json());

app.listen(process.env.PORT||5300, ()=> {

    console.log(`Listen to port ${process.env.PORT}`);
});

let counter = 0;

const buffArrow = fs.readFileSync(`${process.env.FILETOREAD}`); 
const stringData = buffArrow.toString(); 
const dataArr = stringData.split(''); 

console.log(dataArr)

dataArr.forEach((element) => {
    if(element===">"){
        counter++
    } else if (element === "<") {
        counter--;
    }
});
if (counter > 0) {
    console.log(`${counter} steps to the right`)
}

