import React from "react";
import "./App.css";

// class Header extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     count: 10
//     }
//   }
//   render() {
//     return(
//       <h1>The Number of Tasks is {this.state.props.thing.length}</h1> 
//     )
//   }
// }

function Header(props) {
  return(
    <h1>The Number of Tasks is {props.tasks.length}</h1>
  )
}

export default Header;