import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="/">
        Craftspace
      </a>
      <a className="navbar-brand" href="/Allposts">
        See All Posts
      </a>
      <a className="navbar-brand" href="/">
        Leave A Post!
      </a>
    </nav>
  );
}

export default Nav;
