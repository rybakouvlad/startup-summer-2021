import React from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Search />
    </header>
  );
};
