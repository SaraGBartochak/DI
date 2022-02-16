
const robots = [
    {
      id: 1,
      name: 'Sam The Robot',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Robert Rob',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Sims Bot',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Cameron Sim',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'FunBott',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Chip Robot',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    let whereToAppend = document.querySelector('#whereToAppend');

    let newRobotArr = robots.map(({id, name, username, email, image}) => new allRobots(id, name, username, email, image) );

    console.log(newRobotArr)

let searchingInput = document.querySelector('input#searchplace');
searchplace.addEventListener('input', filterRobotsToDisplay);

    // var inputValue = document.getElementById("searchplace").value;
    //    document.addEventListener("keyup", filterItems)


    // JavaScript code
// function search_robots() {
// 	let input = document.getElementById('searchplace').value
// 	input=input.toLowerCase();
// 	let x = document.querySelectorAll('#id');
	
// 	for (i = 0; i < x.length; i++) {
// 		if (!x[i].innerHTML.toLowerCase().includes(input)) {
// 			x[i].style.display="none";
// 		}
// 		else {
// 			x[i].style.display="list-item";				
// 		}
// 	}
// }

function myFunction() {
  // Declare variables
  var input, card;
  input = document.getElementById('searchplace');
  filter = input.value.toLowerCase();
   card = document.getElementsByClassName(".card");
}                                                                             
for (i = 0; i < robots.length; i++) {
  a = robots.getElementsByid("id")[0];
  txtValue = a.textContent || a.innerText;
  if (txtValue.toLowerCase().indexOf(filter) > -1) {
    robots[i].style.display = "";
  } else {
    robots[i].style.display = "none";
  }
}

    // let search = robots.filter(el => el.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)

/**
 * Filter array items based on search criteria 
//  */
//  let filterItems = (robots, name) => {
//   return robots.filter(name => name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
// }

// console.log(filterItems());
// console.log(filterItems());