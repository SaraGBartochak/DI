const express = require('express')
const app = express();

const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();    

app.use(express.json());
app.use('/', express.static(__dirname + 'public'));
app.listen(process.env.PORT||5500, () => {
    console.log(`listen to port ${process.env.PORT}`)
});
app.get('/phrase', (req, res) => {

    const buff = fs.readFileSync(`${process.env.FILETOREAD}`); 
    const jsonData = buff.toString();

    fs.writeFile(`/phrase.txt`, 'Some text', err => {

        if(err){

            res.json({msg: `ERROR : FILE ${process.env.FILETOWRITE}`});
        }
    })
    
    fs.appendFile(`/phrase.txt`, ' Buy orange juice', err => {

        if(err){

            res.json({msg: `ERROR : FILE ${process.env.FILETOWRITE}`});
        }
    })
    

    fs.unlink(`${process.env.FILETOAPPEND}`, err => {

        if(err){

            res.json({msg: `DELETING ERROR : FILE ${process.env.FILETOAPPEND}`});
        }
    })

    res.json(jsonData); 
})