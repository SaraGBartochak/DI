import React from 'react';
import Res from './Res'
import {connect} from 'react-redux';
import {setResults} from '../redux/actions'

const Calc = (props) =>  {

  const handleClick = () => {
    const {fname,sname} = props;
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
      // this.setState({results:data})
      console.log(data);
      props.getResults(data)
    })
    .catch(err => {
      console.error(err);
    });
  }

  return(
     <>
       <button onClick={()=>handleClick()}>Click</button>
       <Res />
     </>
  )


}

const mapStateToProps = (state) => {
  return {
    fname: state.fname,
    sname: state.sname
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getResults: (res)=> dispatch(setResults(res))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calc);
