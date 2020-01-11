import React                          from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main}                         from "./components/Main/Main.jsx";
import {Navbar}                       from "./components/Navbar/Navbar.jsx";

const App = props => {
   return (
      <BrowserRouter>
         <Navbar/>
         <div className="container pt-4">
            <Switch>
               <Route path={'/'} exact component={Main}/>
               {/*<Route path={'/users'} component={Users}/>*/}
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
