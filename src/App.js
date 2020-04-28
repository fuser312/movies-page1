import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import MoviesDetail from "./MoviesDetail";
import MoviesLayout from "./MoviesLayout";
import SearchPage from "./Search";

function App() {
    return (
        <Router>
            <Switch>

                <Route path={"/details/:id"} component={MoviesDetail}/>
                <Route exact path={"/search"} component={SearchPage}/>
                <Route path={"/search/:query"} component={MoviesLayout}/>
                <Route path={""} component={MoviesLayout}/>
            </Switch>
        </Router>
    );
}

export default App;
