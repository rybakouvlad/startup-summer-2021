import React from "react";

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num < 900) {
    return num;
  }
}

export const UserInfo = ({ user }) => {
  return (
    <section className="user_info">
      <img src={user.avatar_url} alt="user avatar" />
      <h3>{user.name}</h3>
      <a href={user.html_url}>{user.login}</a>
      <div className="subscribers">
        <div className="followers">
          <p>{numFormatter(user.followers)} followers</p>
        </div>
        <div className="following">
          <p>{numFormatter(user.following)} following</p>
        </div>
      </div>
    </section>
  );
};
