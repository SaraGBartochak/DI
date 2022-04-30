import React , {Component} from 'react';
import TransactionForm from './TransactionForm';
import {addToLoacalStorage, getFromLocalStorage} from '../utils/storage';
import {connect} from 

class TransactionList extends Component {
  constructor() {
    super();
    this.state = {
      list: getFromLocalStorage('trxes'),
      currentIndex: -1,
      trx: {}
    }
  }

  handleEdit = (indx) => {
    const {list} = this.state;
    this.setState({trx:list[indx],currentIndex:indx})
  }

  handleDelete = (indx) => {
    const {list} = this.state;
    list.splice(indx, 1);
    addToLoacalStorage('trxes', list);
    this.setState({list:[...list], currentIndex:-1})
  }

  handleInsert = (trx) => {
    const {list} = this.state;
    list.push(trx);
    addToLoacalStorage('trxes', list);
    this.setState({list:[...list], currentIndex:-1})
  }

  handleUpdate = (trx) => {
    const {list,currentIndex} = this.state;
    list[currentIndex] = trx;
    addToLoacalStorage('trxes', list);
    this.setState({list:[...list], currentIndex:-1, trx:{} })
  }

  render(){
    const {list,currentIndex,trx} = this.state;
    return(
      <div>
        <TransactionForm
          currentIndex={currentIndex}
          handleInsert={this.handleInsert}
          handleUpdate={this.handleUpdate}
          trx={trx}
        />
        <div style={{marginTop:'10px'}}>
          {
            list.map((item,index)=>{
              return(
                <div key={index} className="dflex">
                  <div className="box">{item.accountNumber}</div>
                  <div className="box">{item.FSC}</div>
                  <div className="box">{item.name}</div>
                  <div className="box">{item.amount}</div>
                  <div><button onClick={()=>this.handleEdit(index)}>Edit</button></div>
                  <div><button onClick={()=>this.handleDelete(index)}>Delete</button></div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    list:state.list,
    currentIndex: state.currentIndex
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleEdit:op
  }
}
export default TransactionList
