const fs = require('fs');

fs.writeFile(`/phrase.txt`, 'Blah blah', err => {

    if(err){

        console.log("Error");
    }
})

fs.appendFile(`/phrase2.txt`, 'Buy orange juice', err => {

    if(err){

        console.log("Error");
    }
})

fs.unlink(`/phrase2.txt`, err => {

    if(err){

        console.log("Error");
    }
});
