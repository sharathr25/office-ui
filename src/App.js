import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Login, Home, Admin } from './routes';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/admin" exact>
                    <Admin />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;