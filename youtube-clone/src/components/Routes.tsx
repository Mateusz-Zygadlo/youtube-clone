import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/Explore/ExplorePage';
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
 
interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
}

export const Routes: React.FC<Props> = (props) => {
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
                    render={()=>(<HomePage {...props} />)} />
                <Route 
                    exact
                    path='/explore'
                    render={()=>(<ExplorePage {...props} />)} />
                <Route
                    exact
                    path='/subscriptions'
                    render={()=>(<SubscriptionsPage {...props} />)} />
                <Route
                    exact
                    path='/history'
                    render={()=>(<HistoryPage {...props} />)} />
                <Route
                    exact
                    path='/library'
                    render={()=>(<LibraryPage {...props} />)} />
                <Route
                    exact
                    path='/liked'
                    render={()=>(<LikedPage {...props} />)} />
                <Route
                    exact
                    path='/watchLater'
                    render={()=>(<WatchLaterPage {...props} />)} />
                <Route
                    exact
                    path={['/channel', '/channel/home']}
                    render={() => {
                        return(
                            <>
                                <Redirect from='/channel' to='/channel/home' />
                                <ChannelHomePage {...props} />
                            </>
                        )
                    }} />
                <Route
                    exact
                    path='/channel/videos'
                    render={()=>(<ChannelVideoPage {...props} />)} />
                <Route
                    exact
                    path='/channel/playlists'
                    render={()=>(<ChannelPlaylistsPage {...props} />)} />
                <Route
                    exact
                    path='/channel/playlists/one'
                    render={()=>(<ChannelPlaylistsNowPage {...props} />)} />
                <Route
                    exact
                    path='/channel/channels'
                    render={()=>(<ChannelChannelsPage {...props} />)} />
                <Route
                    exact
                    path='/channel/about'
                    render={()=>(<ChannelAboutPage {...props} />)} />
            </Switch>
        </BrowserRouter>
    )
}