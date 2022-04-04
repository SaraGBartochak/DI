// Exercise2

const DisplayHello = () => {
    return( <div>
         <h1>Hello World</h1>
         <h3>{myelement}</h3>
         <h3>{user.first_name}</h3>
         <h3>{user.last_name}</h3>
         <p>"React is {sum} times better with JSX"</p>
     </div>)
 }
 export default DisplayHello;

 const myelement = <h1>I Love JSX!</h1>;

 const sum = 5+5

 const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };