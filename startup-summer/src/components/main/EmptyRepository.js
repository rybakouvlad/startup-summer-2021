import React from "react";
import { ReactComponent as Svg } from "../../assets/icons/rep.svg";

export const EmptyRepository = () => {
  return (
    <div className="empty">
      <Svg />
      <p>Repository list is empty</p>
    </div>
  );
};
