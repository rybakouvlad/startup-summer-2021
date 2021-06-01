import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const [formData, setFormData] = useState("");
  const history = useHistory();

  const handlerChange = (event) => {
    setFormData(event.target.value);
  };

  const handlerPress = (event) => {
    if (formData) {
      history.push(`/user/${formData}`);
    }
    event.preventDefault();
  };

  return (
    <div className="search">
      <form onSubmit={handlerPress}>
        <input
          onChange={handlerChange}
          value={formData}
          type="text"
          name="search"
          placeholder="Search.."
        />
      </form>
    </div>
  );
};
