import React from 'react';
import { connect } from 'react-redux';
import { displayCategoryCustom } from '../actions/action';
import './Main.css';

const API_KEY = '563492ad6f91700001000001b630db5a4b7e49b0a7cd1b0e276c684a';

class PhotoList extends React.Component{

    componentDidMount(){

        const query = this.props.catergoryName;
        const apiUrl = `https://api.pexels.com/v1/search?per_page=30&query=${query}`;

        fetch(apiUrl, {

            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {

            this.props.displayCategoryCustom(data.photos);
        })
        .catch(err => console.error(err));
    }

    render(){

        return(
            <div className="photos">
                {
                    (this.props.currentImgDisplay).map(image => {

                        return(

                            <div className="frame" style={{display: "inline-block", justifyContent: 'space-around', marginLeft: "30px"}}>
                                <img style={{marginLeft: "40px", marginBottom: "10px"}} src={image.src.tiny} /> 
                            </div>
                        ) 
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{

        currentImgDisplay : state.currentImageArr,
        catergoryName : state.catergoryName
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        displayCategoryCustom : (currentImageArr)=> dispatch(displayCategoryCustom(currentImageArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)


        