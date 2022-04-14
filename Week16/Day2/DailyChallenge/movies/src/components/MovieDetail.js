import {connect} from 'react-redux';

const MovieDetail = (props) => {
    console.log(props)
    return (
        <>
        <h2>Movie Detail</h2>
         <div>{props.detail&&props.detail.title}</div>
        <div>{props.detail&&props.detail.releaseDate}</div>
        <div>{props.detail&&props.detail.rating}</div> 
        </>
    )
}


const mapStateToProps = (state) =>{
    return {
        detail: state.movie
    }
}

export default connect(mapStateToProps)(MovieDetail)