import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

export const ListRepository = ({ login, repos }) => {
  const [reposList, setReposList] = useState([]);
  const { page } = useParams();
  
  const request = useCallback(async () => {
    try {
      const data = await fetch(
        `https://api.github.com/users/${login}/repos?page=${page}&per_page=4`
      );
      const result = await data.json();
      setReposList(result);
    } catch (error) {}
  }, [login, page]);

  useEffect(() => {
    request();
  }, [page, request]);

  if (!reposList) {
    return <h1>LOADING</h1>;
  }
  return (
    <section className="repos_list">
      <h1>Repositoris({repos})</h1>
      {reposList.map((element) => {
        return (
          <div key={element.id} className="repo_block">
            <a href={element.html_url}>{element.name}</a>
            <p>{element.description}</p>
          </div>
        );
      })}
    </section>
  );
};
