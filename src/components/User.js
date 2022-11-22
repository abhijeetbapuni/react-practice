import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  //like useEffect cleanup function
  componentWillUnmount() {
    console.log("User unmounted");
  }

  //this.props and render inherits from Component
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;
