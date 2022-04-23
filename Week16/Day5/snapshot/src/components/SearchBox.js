import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup  from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { displayCategoryCustom } from '../actions/action';
import { setCategoryName } from '../actions/action';

const API_KEY = '563492ad6f91700001000001b630db5a4b7e49b0a7cd1b0e276c684a';

class SearchBox extends React.Component {

    handleChange = (event) => {

        this.props.setCategoryName(event.target.value);

    }

    handleClick = () => {
       
        const query = this.props.categoryName;

        const apiUrl = `https://api.pexels.com/v1/search?per_page=30&query=${query}`;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: API_KEY
            }
        })
            .then(res => res.json()
                .then(data => {
                    this.props.displayCategoryCustom(data.photos)
                }))
            .chatch(err => console.log(err));
    }

    render() {
        return (

            <div style={{ position: 'absolute', left: '35%', margin: '25px' }}>
                <InputGroup style={{ width: "500px" }} className="mb-3">
                    <FormControl style={{ backgroundColor: "lightgray", border: "none" }}
                        placeholder="Search..." aria-describedby="basic-addon2" onChange={this.handleChange} />
                    <Button style={{ backgroundColor: "lightgray", border:"none" }} variant="outline-secondary" id="button-addon2" onClick={this.handleClick}>
                        <svg height="32" width="32"><path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fillRule="evenodd"/></svg>
                    </Button>
                </InputGroup>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoryName: state.categoryName
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        setCategoryName: (value) => dispatch(setCategoryName(value)),
        displayCategoryCustom: (currentImageArr) => dispatch(displayCategoryCustom(currentImageArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);