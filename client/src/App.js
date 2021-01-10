// for urls later
// import React, { Component } from "react";
// import { BrowserRouter, Route} from "react-router-dom";
import React from "react"
import SearchPage from "./pages/SearchPage"
import Summary from "./pages/summary"
import Login from "./pages/login"
import StockInfoContextProvider from "./contexts/StockInfoContext"
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
  return (
    <div>
      <StockInfoContextProvider>
        <Login />
        <SearchPage />
        <Summary />
      </StockInfoContextProvider>
    </div>
  )
}

export default App;
