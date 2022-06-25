import {Link} from 'react-router-dom';


const Nav = (props) => {
  return(
    <>
        <Button component={Link} to='/'>Home</Button>
        <Button component={Link} to='/about'>About</Button>
    </>
  )
}
export default Nav;
