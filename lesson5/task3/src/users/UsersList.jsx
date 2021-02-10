import React from "react";
import { connect } from "react-redux";
import User from "./User.jsx";
import Filter from "../Filter.jsx";
import { HandleFilterText } from "./user.actions";
import { filteredUsersSelector, filterTextSelector } from "./users.selectors";

const UsersList = ({ usersList, filterText, handleChange }) => {
  return (
    <div>
      <Filter
        text={filterText}
        count={usersList.length}
        onChange={(e) => handleChange(e.target.value)}
      />
      <ul className="users">
        {usersList.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: filteredUsersSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  handleChange: HandleFilterText,
};
export default connect(mapState, mapDispatch)(UsersList);
