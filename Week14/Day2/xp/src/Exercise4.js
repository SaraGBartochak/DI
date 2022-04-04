import React from 'react';
import './Exercise4.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise4 = () => {

    return (
        <div>
            const element = <h1 style={style_header}>Hello world</h1>
            <h1>Some text to see</h1>
            <p className='para'>This is a paragraph in my React</p>
            <a href='#'>This is a link</a>
            <form>
                <input type='text'></input>
                <button>Send</button>
            </form>
            <img src='./logo192.png' alt='photo'></img>
            <ul>
                <li>This is a list</li>
                <li>Also a list</li>
                <li>Still a list</li>
            </ul>
        </div>
    )
}

export default Exercise4;
