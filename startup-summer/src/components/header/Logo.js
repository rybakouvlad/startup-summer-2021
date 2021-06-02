import React from "react";
import { ReactComponent as GitHubSvg } from "../../assets/icons/github_logo.svg";
import { useHistory } from "react-router-dom";
export const Logo = () => {
  const history = useHistory();

  const handlerClick = () => {
    history.push("/");
  };
  
  return (
    <div>
      <GitHubSvg onClick={handlerClick} />
    </div>
  );
};
