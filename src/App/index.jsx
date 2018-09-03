import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movies from '../pages/Movies';
import Winners from '../pages/Winners';

class Main extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component ={Movies} />
                    <Route path="/winners" component ={Winners} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;
