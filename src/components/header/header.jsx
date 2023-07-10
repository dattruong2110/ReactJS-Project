import React from "react";
import { Search } from "../pages/home/filter/search";
import { Button } from "react-bootstrap";
import "./header.scss";
import "../base/responsive.scss";
import "../pages/home/home";

export const Header = (props) => {
  const { searchData } = props;
  return (
    <nav className="navbar navbar-light bg-light card-shadow card-hover-shadow">
      <a className="navbar-brand" href="/">
        <img
          src="https://i.pinimg.com/originals/bb/8b/2f/bb8b2f2a1a5a8dc1d7b35530d21dac16.png"
          alt="Navbar Logo"
          className="navbar-logo-img"
        />
      </a>

      <div className="navbar__pc feature">
        <form className="form-inline">
          <Search searchData={searchData} />
        </form>
        <a href="/login">
          <Button
            className="btn btn-outline-secondary"
            style={{ margin: "0 10px" }}
          >
            Login
          </Button>
        </a>
      </div>
    </nav>
  );
};
