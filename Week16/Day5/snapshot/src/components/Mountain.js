import React from "react";
import PhotoList from "./PhotoList";
import { connect } from "react-redux";
import { setCategoryName } from '../actions/action';
import './Main.css';

class Mountain extends React.Component {

    render() {

        this.props.setCategoryName("Mountain");

        return (

            <div>
                <h3 style={{ margin: "60px", textAlign: "center", fontWeight: "bold" }}>Mountain Pictures</h3>
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

export default connect(null, mapDispathToProps)(Mountain);