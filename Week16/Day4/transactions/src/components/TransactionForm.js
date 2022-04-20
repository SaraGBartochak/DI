import React from "react";
import {connect} from 'react-redux';
import * as actions from '../actions/transactionActions'


class TransactionsForm extends React.Component { 
    constructor() {
        super()
        this.state = {
            accountNumber: '',
            FSC: '',
            name: '',
            amount: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.currentIndex === -1) {
            this.props.insert(this.state);
        } else { 
            console.log(this.state)
            this.props.updateTransaction(this.state)
        }
        e.target.reset();
    }

    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <input name='accountNumber' type='text'  onChange={this.handleInputChange} placeholder="Account Number" value={this.state.accountNumber}></input><br/>

            <input name='FSC' type='text' onChange={this.handleInputChange} placeholder="FSC" value={this.state.FSC}></input><br/>

            <input name='name' type='text' onChange={this.handleInputChange} placeholder="Name" value={this.state.name}></input><br/>

            <input name='amount' type='text' onChange={this.handleInputChange} placeholder="Amount" value={this.state.amount}></input><br/>
            <br/>
            <button type="submit">Submit</button>
            </form>

            </>
        )
    }
}
    const mapStateToProps = (state) => {
        return {
            list: state.list,
            currentIndex: state.currentIndex
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            insert: actions.insert,
            update: actions.update
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(TransactionsForm);
