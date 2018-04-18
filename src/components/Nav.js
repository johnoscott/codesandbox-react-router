import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/lib/Button";

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">House</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />
  </div>
);

export default Nav;
