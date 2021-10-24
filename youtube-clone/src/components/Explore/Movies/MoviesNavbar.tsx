import { ChannelDescription } from "../../styles/Channel/ChannelDescription";
import { ChannelMainSection } from "../../styles/Channel/ChannelMainSection"; 
import { ChannelAvatar } from "../../styles/Channel/ChannelAvatar";
import { ChannelName } from "../../styles/Channel/ChannelName";
import { ChannelInfo } from "../../styles/Channel/ChannelInfo";
import { ChannelCategoryBar } from "../../styles/Channel/ChannelCategoryBar";
import { ChannelCategoryName } from "../../styles/Channel/ChannelCategoryName";
import { ChannelStatsInfo } from "../../styles/Channel/ChannelStatsInfo";
import { Name } from "../../styles/Channel/Name";
import { NavLink } from "react-router-dom";

export const MoviesNavbar = () => {
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
                    <NavLink to='/explore/movies/browse' activeClassName='active'>
                        <Name>Browse</Name>
                    </NavLink>
                    <NavLink to='/explore/movies/purchased' activeClassName='active'>
                        <Name>Purchased</Name>
                    </NavLink>
                </ChannelCategoryName>
            </ChannelCategoryBar>
        </ChannelDescription>
    );
}