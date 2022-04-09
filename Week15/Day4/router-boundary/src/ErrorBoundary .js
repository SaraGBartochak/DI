import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = { hasError: false}
    }

    componentDidCatch(error, errorInfo){
        this.setState({error:error, errorInfo:errorInfo})
    }
    render(){
        console.log(this.state.error,this.state.errorInfo);
    if(this.state.hasError){
    return (
        <>
        <h2></h2>
        </>
    )
       
    }
    return this.props.children
}
}
export default ErrorBoundary