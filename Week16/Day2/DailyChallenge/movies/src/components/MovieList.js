import {connect} from 'react-redux';
import { movieDetails } from '../redux/actions';
const MovieList = (props) => {
    return (
        <>
        <h2>Movie List</h2>
        {
            props.arrMovies.map((item, i) => {
                return (
                    <div key={i}>
                    <h3>{item.title}</h3>
                    <button onClick={()=>props.movieD(item)}>Detail</button>
                    </div>
                )
            })
        }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        arrMovies: state.movies
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        movieD: (obj) => dispatch(movieDetails(obj))
     }
}
export default connect(mapStateToProps, mapDispatchToProps)( MovieList)