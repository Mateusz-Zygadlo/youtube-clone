import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
 

export const Routes: React.FC = () => {
    const [isOpen, setNavOpen] = useState<boolean>(true);
    const [isLogin, setLogin] = useState<boolean>(true);
    const [mobileWidth, setMobileWidth] = useState<boolean>(false);
    const [minimum, setMinimum] = useState<boolean>(false);

    const setMobileWidthFunc = (props: boolean): void => {
        setMobileWidth(!props);
    }

    const openNav = (props: boolean): void => {
        setNavOpen(props);
    }

    useEffect(() => {
        const resizeFunc = () => {
            if(window.innerWidth){
                if(window.innerWidth > 1300){
                    setNavOpen(true);
                    setMobileWidth(false);
                }else if(window.innerWidth < 1300 && window.innerWidth > 700){
                    setNavOpen(false);
                    setMobileWidth(true);
                }else{
                    setMinimum(true);
                    setMobileWidth(true);
                    setNavOpen(false);
                }
                if(window.innerWidth < 700){
                    setMinimum(true);
                }else{
                    setMinimum(false);
                }
            }
        }

        window.addEventListener('resize', resizeFunc);

        return () => {
            window.removeEventListener('resize', resizeFunc);
        }
    });

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
                            openNavFunc={openNav}
                            isOpen={isOpen}
                            isLogin={isLogin}
                            setMobileWidthFunc={setMobileWidthFunc}
                            mobileWidth={mobileWidth}
                            openNav={openNav}
                            minimum={minimum} />
                    )} />
                <Route 
                    exact
                    path='/explore'
                    render={() => (
                        <ExplorePage 
                            openNavFunc={openNav}
                            isOpen={isOpen}
                            isLogin={isLogin}
                            setMobileWidthFunc={setMobileWidthFunc}
                            mobileWidth={mobileWidth}
                            openNav={openNav}
                            minimum={minimum}  />
                    )}  />
            </Switch>
        </BrowserRouter>
    )
}