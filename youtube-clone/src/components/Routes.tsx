import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
 

export const Routes: React.FC = () => {
    const [width, setWidth] = useState<boolean>(false);

    const setWidthFunc = (value: boolean): void => {
        setWidth(value);
    }

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
                    render={() => (
                        <HomePage 
                            setWidthFunc={setWidthFunc}
                            width={width} />
                    )} />
            </Switch>
        </BrowserRouter>
    )
}