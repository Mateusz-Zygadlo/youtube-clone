import React, { useState } from "react";
import { ChannelDescription } from "../styles/Channel/ChannelDescription";
import { ChannelImage } from "../styles/Channel/ChannelImage";
import { ChannelMainSection } from "../styles/Channel/ChannelMainSection"; 
import { ChannelAvatar } from "../styles/Channel/ChannelAvatar";
import { ChannelName } from "../styles/Channel/ChannelName";
import { ChannelInfo } from "../styles/Channel/ChannelInfo";
import { ChannelSubscription } from "../styles/Channel/ChannelSubscription";
import { ChannelButton } from "../styles/Channel/ChannelButton";
import { ChannelStatsInfo } from "../styles/Channel/ChannelStatsInfo";

export const SportsChannel = () => {
    const [subscribe, setSubscribe] = useState<boolean>(false);

    const changeSubscribeStatus = (props: boolean): void => {
        setSubscribe(!props);
    }

    return(
        <ChannelDescription>
            <ChannelImage></ChannelImage>
            <ChannelMainSection>
                <ChannelStatsInfo>
                    <ChannelAvatar></ChannelAvatar>
                    <ChannelInfo>
                        <ChannelName>Sports</ChannelName>
                        <ChannelSubscription>3,4k subscriptions</ChannelSubscription>
                    </ChannelInfo>
                </ChannelStatsInfo>
                {subscribe ? 
                    <ChannelButton subscribe='subscribe' onClick={()=>{changeSubscribeStatus(subscribe)}}>Subscribed</ChannelButton>
                :
                    <ChannelButton onClick={()=>{changeSubscribeStatus(subscribe)}}>Subscribe</ChannelButton>
                }
            </ChannelMainSection>
        </ChannelDescription>
    );
}