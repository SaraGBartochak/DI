import {connect} from 'react-redux';
import { changePropTwo } from '../redux/actionsChild';
import {chanhePropTwo} from '/redux'


const Child = (props) => {
    return (

    <>
    <h1>Child Component</h1>
        <h2>{this.props.one}</h2>
        <input type='text' onChange={props.hadleInputTwo}/>
        <h2>{this.props.two}</h2>
    </>

    )
}

const mapStateToPorps = (state) => {
    return {
        one:state.propOne
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      handleInputTwo: (e)=> dispatch(changePropTwo(e.target.value))
    }
  }

export default connect(mapStateToPorps,mapDispatchToProps)(Child)



