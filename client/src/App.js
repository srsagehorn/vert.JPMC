// for urls later
// import React, { Component } from "react";
// import { BrowserRouter, Route} from "react-router-dom";
import React from "react"
import Search from "./pages/search"
import Summary from "./pages/summary"
import Login from "./pages/login"
// import Portoflio from './pages/portfolio'
import './styles.css'

// class App extends Component {
//   render() {
//     return (
//       <UserProvider>
//         <BrowserRouter>
//           <Route exact path="/" component={Login} />
//           <Route exact path="/search" component={Search} />
//           <Route exact path="/summary" component={Summary} />
//          <Route exact path="/portfolio" component={Portfolio} />
//         </BrowserRouter>
//       </UserProvider>
//     );
//   }
// }

function App() {
  return(
  <div>
    <Login />
    <Search />
    <Summary />
  </div>
  )
}

export default App;
