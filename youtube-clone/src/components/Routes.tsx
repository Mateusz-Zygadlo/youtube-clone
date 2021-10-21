import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { SubscriptionsPage } from './pages/SubscriptionsPage';
import { HistoryPage } from './pages/HistoryPage';
import { LibraryPage } from './pages/LibraryPage';
import { LikedPage } from './pages/LikedPage';
import { WatchLaterPage } from './pages/WatchLaterPage';
import { ChannelHomePage } from './pages/Channel/ChannelHomePage';
import { ChannelVideoPage } from './pages/Channel/ChannelVideoPage';
import { ChannelPlaylistsPage } from './pages/Channel/ChannelPlaylistsPage';
import { ChannelPlaylistsNowPage } from './pages/Channel/ChannelPlaylistsNowPage';
import { ChannelChannelsPage } from './pages/Channel/ChannelChannelsPage';
import { ChannelAboutPage } from './pages/Channel/ChannelAboutPage';
 

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
                <Route
                    exact
                    path='/subscriptions'
                    render={() => (
                        <SubscriptionsPage
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
                    path='/history'
                    render={() => (
                        <HistoryPage
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
                    path='/library'
                    render={() => (
                        <LibraryPage
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
                    path='/liked'
                    render={() => (
                        <LikedPage
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
                    path='/watchLater'
                    render={() => (
                        <WatchLaterPage
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
                    path={['/channel', '/channel/home']}
                    render={() => {
                        return(
                            <>
                                <Redirect from='/channel' to='/channel/home' />
                                <ChannelHomePage
                                    openNavFunc={openNav}
                                    isOpen={isOpen}
                                    isLogin={isLogin}
                                    setMobileWidthFunc={setMobileWidthFunc}
                                    mobileWidth={mobileWidth}
                                    openNav={openNav}
                                    minimum={minimum} />
                            </>
                        )
                    }} />
                <Route
                    exact
                    path='/channel/videos'
                    render={() => (
                        <ChannelVideoPage
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
                    path='/channel/playlists'
                    render={() => (
                        <ChannelPlaylistsPage
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
                    path='/channel/playlists/one'
                    render={() => (
                        <ChannelPlaylistsNowPage
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
                    path='/channel/channels'
                    render={() => (
                        <ChannelChannelsPage
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
                    path='/channel/about'
                    render={() => (
                        <ChannelAboutPage
                            openNavFunc={openNav}
                            isOpen={isOpen}
                            isLogin={isLogin}
                            setMobileWidthFunc={setMobileWidthFunc}
                            mobileWidth={mobileWidth}
                            openNav={openNav}
                            minimum={minimum} />
                    )} />
            </Switch>
        </BrowserRouter>
    )
}