fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(result => console.log(result));


    const convert = async () => {
    
                try {
                    let response= await fetch("https://swapi.dev/api/starships/9/");
                       
                    let data  = await response.json()
                    console.log(data);

                } catch(error) {
                    if (error.response.status === 302) {
                        window.location = '/view';
                    }
                }
    }

        convert()

// Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Analyze the code provided above what will be the outcome? will be resolved and calling