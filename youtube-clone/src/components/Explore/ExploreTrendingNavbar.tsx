import React, { useState } from "react";
import { ChannelDescription } from "../styles/Channel/ChannelDescription";
import { ChannelImage } from "../styles/Channel/ChannelImage";
import { ChannelMainSection } from "../styles/Channel/ChannelMainSection"; 
import { ChannelAvatar } from "../styles/Channel/ChannelAvatar";
import { ChannelName } from "../styles/Channel/ChannelName";
import { ChannelInfo } from "../styles/Channel/ChannelInfo";
import { ChannelSubscription } from "../styles/Channel/ChannelSubscription";
import { ChannelButton } from "../styles/Channel/ChannelButton";
import { ChannelCategoryBar } from "../styles/Channel/ChannelCategoryBar";
import { ChannelCategoryName } from "../styles/Channel/ChannelCategoryName";
import { ChannelStatsInfo } from "../styles/Channel/ChannelStatsInfo";
import { Name } from "../styles/Channel/Name";
import { NavLink } from "react-router-dom";

export const ExploreTrendingNavbar = () => {
    return(
        <ChannelDescription>
            <ChannelMainSection>
                <ChannelStatsInfo>
                    <ChannelAvatar></ChannelAvatar>
                    <ChannelInfo>
                        <ChannelName>Channel Name</ChannelName>
                    </ChannelInfo>
                </ChannelStatsInfo>
            </ChannelMainSection>
            <ChannelCategoryBar>
                <ChannelCategoryName>
                    <NavLink to='/explore/trending/now' activeClassName='active'>
                        <Name>Now</Name>
                    </NavLink>
                    <NavLink to='/explore/trending/music' activeClassName='active'>
                        <Name>Music</Name>
                    </NavLink>
                    <NavLink to='/explore/trending/gaming' activeClassName='active'>
                        <Name>Gaming</Name>
                    </NavLink>
                    <NavLink to='/explore/trending/movies' activeClassName='active'>
                        <Name>Movies</Name>
                    </NavLink>
                </ChannelCategoryName>
            </ChannelCategoryBar>
        </ChannelDescription>
    );
}