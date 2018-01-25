import React from 'react';
import {Switch, Route} from "react-router-dom";
import SideBar from "./SideBar";
import Person from "./Person";

function App(props) {
    return (
        <div>
            <SideBar />
            <Switch>
                <Route path="/person/:id" component={Person}/>
            </Switch>
        </div>
    )
}

export default App;