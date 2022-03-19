const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/aboutMe/:hobby', (req, res) => {
  if (typeof req.params.hobby != 'string') {
    res.status(404).send("not found")
    console.log('404 Page not found')
  } else {
    res.json(req.params.hobby)
    console.log(req.params.hobby)
  }
});

app.get('/pic', (req, res) => {
    res.sendFile('/public/pic.html', {root: __dirname})
    console.log('sending pic page')
});

app.get('/form', (req, res) => {

  res.sendFile('/public/form.html', {root: __dirname});
});

app.get('/formData', (req, res) => {
    let msg = req.query.message;
    let email = req.query.email;
    res.end(`${email} sent you a message: ${msg}`);
});

app.listen(4000, () => {
  console.log(`Server running on port 4000`) 
});