import React from "react"


export default function Nav() {

  function triggerDropDown() {

  }

  return(
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo blueText" id = "portfolio">Portfolio</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/summary">Summary</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/portfolio">My portfolio</a></li>
        <li className = "dropdown-trigger" data-target="dropdown1" id = "userInfo">
            {/* <img id = "userAvatar" className = "circle" src ="" alt = ""/>  */}
            <div id = "userAvatar" className = "circle" onClick= {triggerDropDown} ></div>
            John Smith
            <ul>
              <li id = "logout" display = "none"> <a href = "/"></a>Log Out</li>
            </ul>
        </li>
      </ul>
    </div>
  </nav>
  )
}

// function SignOut() {
//   return auth.currentUser && (
//     <Link to="/loggedout"><a className="sign-out" onClick={() => auth.signOut()}>Logout</a></Link>
//   )