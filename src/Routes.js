import React from 'react';

import {BrowserRouter as Router ,
    Switch ,
    Route
} from 'react-router-dom';
import Personagens from './Pages/Personagens';
import Personagem from './Pages/Personagem';
import Home from './Pages/Home';
function Routes() {
    return (
        <>
        <Router>
            <Switch>
                <Route path="/" >
                    <Home/>
                </Route>
                <Route path="/personagens">
                    <Personagens />
                </Route>
                <Route path="/personagem/:id">                    
                    <Personagem />
                </Route>
            </Switch>
        </Router>
        </>
    )
}
export default Routes;