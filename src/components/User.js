import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  //this.props and render inherits from Component
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;
