import React from "react";

export const UserInfo = ({user}) => {
  return (
    <section className="user_info">
      <img src={user.avatar_url} alt="user avatar" />
      <h3>{user.name}</h3>
      <a href={user.html_url}>{user.login}</a>
      <div className="subscribers">
        <div>{user.followers} followers</div>
        <div>{user.following} following</div>
      </div>
    </section>
  );
};
