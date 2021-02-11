import React from "react";

const User = ({ userData }) => {
  if (!userData) {
    return null;
  }
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src="https://avatars0.githubusercontent.com/u/10639145?v=4"
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">Apple</span>
        <span className="user__location">Cupertino, CA</span>
      </div>
    </div>
  );
};

export default User;
