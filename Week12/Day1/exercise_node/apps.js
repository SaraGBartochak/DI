const users = require('');
users.getUser()
.then(data=>{
    console.log(data);
})

.catch(e => {
    console.log('error from api', e.message)
})
// Module 
