import React from "react";

class FavColor extends React.Component {
    constructor(props) {
        super ()
        this.state = {
            favoriteColor: 'red',
        }
    }
    componentDidMount(){
        setTimeout(() => {
            changeColor();
            }, 1500);
        const changeColor = ()=>{
            if(this.state.favoriteColor === 'red'){
                this.setState({favoriteColor: "yellow"});
            }   
        }
        
    }
    shouldComponentUpdate(nextProps, nextState) {
       return true;
    }
    
    
    componentDidUpdate(prevState) {
        if (prevState.favoriteColor !== this.state.favoriteColor) {
          console.log(prevState.favoriteColor, this.state.favoriteColor)

          return (<h2>`My Favorite color is {this.state.favoriteColor}`</h2>)

        } 
    }

    render() {
        const changeOnClick = ()=>{
            if(this.state.favoriteColor){
                this.setState({favoriteColor: "pink"});
            }
        }
        return(
            <>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <button onClick={changeOnClick}>click</button>
            </>
        )
    }
}


export default FavColor;


