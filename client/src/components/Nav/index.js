import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Craftspace
      </a>
      <a className="navbar-brand" href="/detail">
        Posts
      </a>
      <a className="navbar-brand" href="/">
        Leave A Post!
      </a>
    </nav>
  );
}

export default Nav;
