import React from 'react';

// class User extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       phone:'050555555'
//     }
//   }
//   componentDidMount(){
//     this.setState({phone:'9999999'})
//   }
//   render(){
//     const {phone} = this.state;
//     const {name, email} = this.props;
//     return(
//       <div>
//         {name}
//         <br/>
//         {email}
//         <br />
//         {phone}
//       </div>
//     )
//   }
// }

const User = (props) => {
  return(
    <div>
      {props.name}
    </div>
  )
}
export default User