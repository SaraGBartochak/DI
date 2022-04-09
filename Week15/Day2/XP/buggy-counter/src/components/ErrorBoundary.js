import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            error: null,
            errorInfo: null       
        }
    }

    componentDidCatch(error, errorInfo) {

        this.setState({error:error, errorInfo: errorInfo})
    }
    render () {
        console.log(this.state.error, this.state.errorInfo)
        if(this.state.errorInfo)
        return(
            <>
            <h2>Something went wrong...</h2>
            </>
        )
        return this.props.children
    }
}

export default ErrorBoundary