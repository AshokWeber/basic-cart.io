import React from "react";

//Stateless Functional Component example

const NavBar = props => {
  //"inStateless Fucntional component" props can be passed in argument and can change this.props.x to props.x

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Total Carts is:{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalcounters}
        </span>
      </a>
    </nav>
  );
};

//Class state
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalcounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
