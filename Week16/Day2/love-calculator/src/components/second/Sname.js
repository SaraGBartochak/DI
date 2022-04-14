import Calc from './third/Calc';
import {connect} from 'react-redux';
import { setNames} from '../redux/action';

const Sname = (props) => {
  return(
    <>
      Second Name: <input type='text' name='sname' onChange={props.handleChange}/>
      <Calc />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChande: (e)=> dispatch(setNames('SET_SNAME',e.target.value))
  }
}

export default connect (null,mapDispatchToProps)(Sname)
