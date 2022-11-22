import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    //always one object to manager state
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }
  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   // handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error("No users found");
    }
  }
  toggleUsersHandler() {
    // this.state.showUsers = false; // Won't work and dont do this
    this.setState((prevState) => {
      //return only modified keys, react will merge it to state unlike setUsers hook
      return {
        showUsers: !prevState.showUsers,
      };
    });
  }
  render() {
    //can do this
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        {/* this will point to current class */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
