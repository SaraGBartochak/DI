import DisplayHello from "./DisplayHello"
const UserFavoriteColors = (props)=>{
    return(
        <div>
            <h3>{DisplayHello.fav_animals}</h3>
            <h3>{props.fav_animals}</h3>
        </div>
    
    )
}
export default UserFavoriteColors;



