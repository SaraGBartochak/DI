import React from "react";
import {connect} from 'react-redux';
import * as actions from '../actions/transactionActions';
import TransactionForm from './TransactionForm'

class TransactionList extends React.Component {
    constructor(){
        super()
    }

    handleIndex = (e) => {
        this.props.updateIndex(e.target.id)
    }

    handleDelete = (e) => {

        this.props.delete(e.target.id);
    }

    render(){
        return(

            <div>
                <h1>Financial Transactions</h1>
                <TransactionForm />
                <br/>
                <br/>

                <table>
                    <tbody>
                        {this.props.list.map((item, i) => { 
                                return (
                                <tr>
                                <td>{item.accountNumber}</td>
                                <td>{item.FSC}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td><button id={i} onClick={() => this.handleIndex}>Edit</button></td>
                                <td><button id={i} onClick={() => this.handleDelete}>Delete</button></td>
                            </tr>
                                )
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateIndex: actions.updateIndex,
        delete: actions.Delete
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)