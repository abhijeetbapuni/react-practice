import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component {
  constructor() {
    super();
    //always one object to manager state
    this.state = {
      showUsers: true,
      more: "Test",
    };
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
        {DUMMY_USERS.map((user) => (
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
