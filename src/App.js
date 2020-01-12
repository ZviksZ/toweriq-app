import React                          from 'react';
import {Provider}                     from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main}                         from "./components/Main/Main.jsx";
import {Navbar}                       from "./components/Navbar/Navbar.jsx";
import Users                          from "./components/Users/Users.jsx";
import store                          from "./redux/store.js";

const App = () => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <Navbar/>
            <div className="container pt-4">
               <Switch>
                  <Route path={'/'} exact component={Main}/>
                  <Route path={'/users'} component={Users}/>
               </Switch>
            </div>
         </Provider>
      </BrowserRouter>
   );
}


export default App;
