import React, {Component} from 'react';
import {connect} from 'react-redux';
import { insert_trx,}

class TransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      accountNumber:'',
      FSC: '',
      name: '',
      amount: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {currentIndex} = this.props
    if(currentIndex==-1) {
      this.props.handleInsert(this.state);
    }
    else {
      this.props.handleUpdate(this.state);
    }
    this.setState({
      accountNumber:'',
      FSC: '',
      name: '',
      amount: ''
    })
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.currentIndex != this.props.currentIndex){
      this.setState({
        accountNumber:this.props.trx.accountNumber||'',
        FSC: this.props.trx.FSC||'',
        name: this.props.trx.name||'',
        amount: this.props.trx.amount||'',
      })
    }
  }

  render(){
     const {currentIndex} = this.props;
      return(
        <>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.accountNumber} onChange={this.handleInputChange} type="text" name="accountNumber" placeholder="Account Number" />
            <input value={this.state.FSC} onChange={this.handleInputChange} type="text" name="FSC" placeholder="FSC" />
            <input value={this.state.name} onChange={this.handleInputChange} type="text" name="name" placeholder="Name" />
            <input value={this.state.amount} onChange={this.handleInputChange} type="text" name="amount" placeholder="Amount" />
            <input type="submit" value={currentIndex==-1?'Submit':'Update'}/>
          </form>
        </>
      )
  }
}
export default TransactionForm
