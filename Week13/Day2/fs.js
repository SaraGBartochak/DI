const fs = require('fs');

fs.writeFile(`/phrase.txt`, 'Blah blah', err => {

    if(err){

        console.log("Error");
    }
})

fs.appendFile(`/phrase.txt`, 'Buy orange juice', err => {

    if(err){

        console.log("Error");
    }
})

fs.unlink(`/phrase.txt`, err => {

    if(err){

        console.log("Error");
    }
});
