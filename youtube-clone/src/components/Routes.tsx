import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
 

export const Routes: React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={App} />
                <Route 
                    exact
                    path='/home'
                    component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}