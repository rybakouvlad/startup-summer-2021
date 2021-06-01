import React from "react";

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

export const UserInfo = ({ user }) => {
  return (
    <section className="user_info">
      <img src={user.avatar_url} alt="user avatar" />
      <h3>{user.name}</h3>
      <a href={user.html_url}>{user.login}</a>
      <div className="subscribers">
        <div className="followers">{numFormatter(user.followers)} followers</div>
        <div className="following">{numFormatter(user.following)} following</div>
      </div>
    </section>
  );
};
