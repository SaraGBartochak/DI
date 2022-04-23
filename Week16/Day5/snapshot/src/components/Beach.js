import React from "react";
import { connect } from "react-redux";
import PhotoList from "./PhotoList";
import { setCategoryName } from '../actions/action';
import './Main.css';


class Beach extends React.Component {
    render() {

        this.props.setCategoryName("Beach");

        return (

            <div>
                <h3 style={{ margin: "60px", textAlign: "center", fontWeight: "bold" }}>Beaches Pictures</h3>
                <PhotoList />
            </div>
        )
    }
}

const mapDispathToProps = (dispatch) => {

    return {
        setCategoryName: (categoryName) => dispatch(setCategoryName(categoryName))
    }
}


export default connect(null, mapDispathToProps)(Beach);