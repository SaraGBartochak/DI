import Sname from './second/Sname';
import {connect} from 'react-redux';
import { setNames} from '../redux/action';


const Fname = (props) => {
  return(
    <>
      First Name: <input type='text' name='fname' onChange={props.handleChange}/>
      <Sname />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChande: (e)=> dispatch(setNames('SET_FNAME',e.target.value))
  }
}

export default connect (null,mapDispatchToProps)(Fname)
