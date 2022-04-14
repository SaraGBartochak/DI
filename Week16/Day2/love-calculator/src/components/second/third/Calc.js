import Res from './fourth/Res';
import {connect} from 'react-redux';
import { setNames} from '../redux/action';
import {setResult} 

const Calc = (props) => {
  
  const handleClick = () => {
    const {fname,sname} = this.state;
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({results:data})
    })
    .catch(err => {
      console.error(err);
    });
  }
  }
  return(
    <>
      <button onClick={()=>props.handleClick()}>Click</button>
      <Res results={props.results} />
    </>
  )

  const 

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default Calc;
