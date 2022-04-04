import React from "react";

class ErrorBoundry extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            errorInfo: null
        }
    }
    componentDidCatch(error,errorInfo){
        this.setState({error:error, errorInfo:errorInfo})
    }
    render() {
        return this.props.children
    }
}
export default ErrorBoundry