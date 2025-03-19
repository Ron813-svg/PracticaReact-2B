import React from "react";

function ScrollspyNavbar() {
  return (
    <>
      
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

     
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabIndex="0"
        style={{ height: "300px", overflowY: "scroll" }}
      >
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>Content for the first section...</p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>Content for the second section...</p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>Content for the third section...</p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>Content for the fourth section...</p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>Content for the fifth section...</p>
      </div>
    </>
  );
}

export default ScrollspyNavbar;
