function getI() {
    let obj = {
      item: document.getElementById('item').value,
      amount: document.getElementById('amount').value
    } 
    console.log(obj)
    obj = JSON.stringify(obj);
  
    fetch('http://localhost:7000/', {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json'
      },
      body: obj
    })
    .then((res)=>{
      return res.json();
    })
    .then(data=>{
      console.log(data)
    })
    .catch((e) => console.log(e))
  }
  