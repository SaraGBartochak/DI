import React from "react";

class Form extends React.Component{
    constructor (){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            profession: ''
        }
    }

    handleSub = e => {
        this.setState({
            firstName: '',
            lastName: '',
            age: '',
            profession: ''
        })
    }

    handleChange = e => {
        let value;

        this.setState({[e.target.name]: value})

    }

    render() {
        return (
            <>
                <h1>Form</h1>
                    <form onSubmit={this.handleSub}>
                        <input type='text' name="firstName" placeholder="First name" onChange={this.handleChange}/>
                        <br/>
                        <input type='text' name="lastName" placeholder="Last name" onChange={this.handleChange}/>
                        <br/>
                        <input type='text' name="age" placeholder="Age" onChange={this.handleChange}/>
                        <br/>
                        <input type='text' name="profession" placeholder="Profession" onChange={this.handleChange}/>
                    </form>
            
            </>
        )
    }

}

export default Form;