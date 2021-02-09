import React from "react";
import { connect } from "react-redux";
import User from "./User.jsx";
import Pagination from "./Pagination";
import * as usersActions from "./users.actions";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      usersPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { currentPage, usersPerPage } = this.state;
    const { users } = this.props;

    const start = (currentPage - 1) * usersPerPage;

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={usersPerPage}
        />
        <ul className="users">
          {users.slice(start, start + usersPerPage).map((user) => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};
const mapDispatch = {
  createUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
