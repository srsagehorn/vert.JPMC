import React from "react"

export default function Nav() {
  return(
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo blueText" id = "portfolio">Portfolio</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/search">Search</a></li>
        <li><a href="/portfolio">My portfolio</a></li>
        <li id = "userInfo">
            {/* <img id = "userAvatar" className = "circle" src ="" alt = ""/>  */}
            <div id = "userAvatar" className = "circle" ></div>
            John Smith
        </li>
      </ul>
    </div>
  </nav>
  )
}