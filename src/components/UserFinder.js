import { Fragment, Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  static contextType = UsersContext; //only one context per component, then use this.context to access this context
  constructor() {
    super();
    this.state = {
      filteredUsers: [], //can't access the context here, so access the context in componentDidMount
      searchTerm: "",
    };
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  //like useEffect with no dependencies and so once
  componentDidMount() {
    //send http request...
    this.setState({ filteredUsers: this.context.users });
  }
  //like useEffect with dependencies
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  render() {
    return (
      <Fragment>
        {/* you can also wrap the component with consume like we did earlier */}
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
