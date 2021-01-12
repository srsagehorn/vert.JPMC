// import React from "react"
import Search from "./pages/search"
import Summary from "./pages/summary"
import Login from "./pages/login"
import Portfolio from './pages/portfolio'
import './styles.css'
import StockInfoContextProvider from "./contexts/StockInfoContext"
import { UserProvider } from './components/firebase/userContext'
import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <StockInfoContextProvider>
          <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/portfolio" component={Portfolio} />
          </BrowserRouter>
          </StockInfoContextProvider>
       </UserProvider>
    );
  }
}

// function App () {
//   return (
//     <div className = "App">
//       {/* <Login /> */}
//       {/* <Search /> */}
//       <Summary />
//       <Portfolio />
//     </div>
//   )
// }

export default App;

