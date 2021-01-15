
import React, {useState, useEffect}  from "react";
import { useUserContext } from '../firebase/userContext'
import 'firebase/auth';
import firebase from 'firebase/app';
import { Link } from "react-router-dom";
import "../../styles.css"
const auth = firebase.auth();

export default function Nav() {
  const [user, setUser] = useUserContext()
  // const [user] = useUserContext()
  const [displayName, setDisplayName] = useState(
    "")

    useEffect(() => {
      if(user) {
        setDisplayName(user.displayName)
      }
    }, [user]);

  function triggerDropDown() {

  }

  return(
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo blueText" id = "portfolio">
      <img src = 'logo.png' style={{width:"6rem"}}></img>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/summary">Summary</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/portfolio">My portfolio</a></li>
        <li className = "dropdown-trigger" data-target="dropdown1" id = "userInfo">
            {/* <img id = "userAvatar" className = "circle" src ="" alt = ""/>  */}
            <div id = "userAvatar" className = "circle" onClick= {triggerDropDown} ></div>
            {displayName}
            <ul>
              <li id = "logout" display = "none"> <a href = "/"></a>Log Out</li>
            </ul>
        </li>
      </ul>
    </div>
  </nav>
  )
}

function SignOut() {
  return auth.currentUser && (
    <Link to="/"><a className="sign-out" onClick={() => auth.signOut()}>Logout</a></Link>
  )
}