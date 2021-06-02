import React, { useEffect, useCallback, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Repository } from "./Repository";
import { UserInfo } from "./UserInfo";
import { Spinner } from "react-bootstrap";

export const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    avatar_url: "",
    fullName: "",
    login: "",
    html_url: "",
    followers: "",
    following: "",
    public_repos: 0,
  });

  const history = useHistory();
  const { login } = useParams();

  const request = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetch(`https://api.github.com/users/${login}`);
      const result = await data.json();
      if (result.message) {
        history.push("/empty");
      }
      setUser({ ...result });
      setIsLoading(false);
    } catch (error) {}
  }, []);

  useEffect(() => {
    request();
  }, [request]);

  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
  
  return (
    <section className="user_main">
      <UserInfo user={user} />
      <Repository login={user.login} repos={user.public_repos} />
    </section>
  );
};
