import React, {useState, useEffect}  from "react";
import { useUserContext } from '../firebase/userContext'
import 'firebase/auth';
import firebase from 'firebase/app';
import Grid from '@material-ui/core/Grid'
import logo from '../../logo.png'

export default function Nav() {
  const [user] = useUserContext()
  const [displayName, setDisplayName] = useState("")

    useEffect(() => {
      if(user) {
        setDisplayName(user.displayName)
      }
    }, [user]);

  return(
      <nav>
      <Grid container spacing={3}>
      <Grid item xs = {6}>
        <a href="/" >
        <img id = "logo" src = {logo} alt = "vert logo"></img>
        </a>
        </Grid>
        <Grid item xs = {6} className = "right">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/summary">Summary</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/portfolio">My portfolio</a></li>
          <li className = "dropdown-trigger" data-target="dropdown1" id = "userInfo"><div id = "userAvatar" className = "circle" ></div>
              {displayName}
          </li>

        </ul>
        <a id="signout" href="/" onClick = {firebase.auth().signOut()}>Sign Out</a>
        </Grid>
        </Grid>
    </nav>
  )
}