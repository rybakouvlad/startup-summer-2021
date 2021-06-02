import React from "react";
import { ReactComponent as Svg } from "../../assets/icons/user.svg";

export const Empty = () => {
  return (
    <div className="empty">
      <Svg />
      <p>User not found</p>
    </div>
  );
};
