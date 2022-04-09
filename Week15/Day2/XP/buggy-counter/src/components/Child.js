import React from 'react';


class Child extends React.Component {
    constructor(){
        super()
        this.state = {
            show: true
        }
    }
    componentWillUnmount(){
        alert('The component name header is about to be unmounted');
        document.removeEventListener("click", this.delete)
    }
    render(){
        return(

            <header>
                Hello World!
                <br/>
            <button onClick={this.delete}>Delete header</button>
            </header>
        )
    }
}
export default Child;