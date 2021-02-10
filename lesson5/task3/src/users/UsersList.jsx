import React from "react";
import { connect } from "react-redux";
import User from "./User.jsx";
import Filter from "./Filter.jsx";
import { HandleFilterText } from "./user.actions";
import { usersListSelector, filterTextSelector } from "./users.selectors";

// algo
// 1. сделать фильтрацию в селекторе ++
// 2. отслеживать изменения фильтр-текста

const UsersList = ({ users, text, action }) => {
  // const inputHandler = (event) => {
  //   this.setState({
  //     filterText: event.target.value,
  //   });
  // };

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
    users: usersListSelector(state),
    text: filterTextSelector(state),
  };
};

const mapDispatch = {
  action: HandleFilterText,
};
export default connect(mapState, mapDispatch)(UsersList);
