import React from "react";
import { connect } from "react-redux";
import User from "./User.jsx";
import Filter from "./Filter.jsx";
import { HandleFilterText } from "./user.actions";
import { filteredUsersSelector, filterTextSelector } from "./users.selectors";

const UsersList = ({ users, text, action }) => {
  return (
    <div>
      <Filter text={text} count={users.length} onChange={action} />
      <ul className="users">
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: filteredUsersSelector(state),
    text: filterTextSelector(state),
  };
};

const mapDispatch = {
  action: HandleFilterText,
};
export default connect(mapState, mapDispatch)(UsersList);
