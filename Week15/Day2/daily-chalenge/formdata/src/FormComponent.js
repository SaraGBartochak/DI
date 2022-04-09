import React from 'react';

function FormComponent (props) {
    return (
        <div>

        <h1>Sample form</h1>

        <form>

            <input type="text" name="firstName" placeholder='First Name' onChange={props.handleChange}/>
            <br/>
            <input type="text" name="lastName" placeholder='Last Name' onChange={props.handleChange}/>
            <br/>
            <input type="text" name="age" placeholder='Age' onChange={props.handleChange}/>
            <br/>

            <br/>
            <input type="radio" id="male" name="gender" value="male" onChange={props.handleChange}/>
            <label for="male">Male</label><br/>
            <input type="radio" id="female" name="gender" value="female" onChange={props.handleChange}/>
            <label for="female">Female</label><br/>
            
            <br/>
            <label>--Select your destination--</label><br/>

            <select name="destination" onChange={props.handleChange}><br/>

                <option>--Please choose a destination--</option>
                <option value="Thailand">Thailand</option>
                <option value="Japan">Japan </option>
                <option value="Brazil">Brazil </option>
            </select>
            <br/>
            <br/>
        
            <label>Dietary restrictions:</label>
            <br/>
            <br/>
            <input type="checkbox" name="nutsFree" checked={props.nutsFree} onChange={props.handleChange}/>
            Nuts free

            <br/>
            <input type="checkbox" name="lactoseFree" checked={props.lactoseFree} onChange={props.handleChange}/>
            Lactose free

            <br/>
            <input type="checkbox" name="vegan" checked={props.isVegan} onChange={props.handleChange}/>
            Vegan

            <br/>
            <br/>
            
            <button>Submit</button>

        </form>

        <hr />

        <div>
            <h2>Entered information:</h2>

            <p>Your name: {props.firstName} {props.lastName}</p><br/>
            <p>Your age: {props.age}</p><br/>
            <p>Your gender: {props.gender}</p><br/>
            <p>Your destination: {props.destination}</p><br/> 
            <p>Your dietary restrictions:</p>
        </div>
        <div>
            <p>**Nuts free : {props.nutsFree}</p>
            <p>**Lactose free : {props.lactoseFree}</p>
            <p>**Vegan meal : {props.isVegan}</p>
        </div>

    </div>
    );
  }
  
  export default FormComponent;