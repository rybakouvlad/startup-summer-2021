import React, { useEffect, useCallback, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useQuery } from "../../hooks/useQuerty";
import { EmptyRepository } from "./EmptyRepository";
import { ListRepository } from "./ListRepository";
import { Repository } from "./Repository";
import { UserInfo } from "./UserInfo";

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
  const query = useQuery()
  const { login } = useParams();

  const request = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetch(`https://api.github.com/users/${login}`);
      const result = await data.json();
      console.log(result);
      if (result.message) {
        history.push("/empty");
      }
      setUser({ ...result });
      setIsLoading(false);
    } catch (error) {}
  }, [ ]);

  useEffect(() => {
    request();
  }, [request]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <section className="user_main">
      <UserInfo user={user} />
      <Repository login={user.login} repos={user.public_repos}/>
    </section>
  );
};
