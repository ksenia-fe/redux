import React from "react";
import { connect } from "react-redux";

import User from "./User.jsx";
import Pagination from "./Pagination";

import * as usersActions from "./users.actions";
import { usersListSelector, currentPageSelector } from "./users.selector";

const UsersList = ({ users, prevPage, nextPage }) => {
  const usersPerPage = 3;
  const start = users.currentPage * usersPerPage;

  return (
    <div>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        currentPage={users.currentPage}
        totalItems={users.usersList.length}
        itemsPerPage={usersPerPage}
      />
      <ul className="users">
        {users.usersList.slice(start, start + usersPerPage).map((user) => (
          <User name={user.name} age={user.age} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: {
      usersList: usersListSelector(state),
      currentPage: currentPageSelector(state),
    },
  };
};
const mapDispatch = {
  nextPage: usersActions.nextPage,
  prevPage: usersActions.prevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
