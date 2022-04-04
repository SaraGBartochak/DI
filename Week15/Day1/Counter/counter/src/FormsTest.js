import React from "react";

class FormsTest extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName:'',
            lastName:''
        }
    }
        handleChange = (e)=>{
            this.setState({firstName:e.target.value})
        }
        handleChangeLst = (e)=>{
            this.setState({lastName:e.target.value})
        }
        
        handleSubmit = (e)=>{
    e.preventDefault();
    alert(this.state.firstName + " " + this.state.lastName)
}
        render() {
            return (
            <>
            <form onSubmit={this.handleSubmit}>
                First name:<input type='text'name='firstName' onChange={this.handleChange}/>
                <br/>
                First name:<input type='text' name='lastName' onChange={this.handleChange}/>
                <input type='submit' value='submit'/>
            </form>


            </>
            
            )
        }
        }
    