import React from "react";
import { Link } from 'react-router-dom';
import { NavContainer } from './styles/navbar/NavContainer';
import { Symbol } from './styles/navbar/Symbol';
import { Menu } from './styles/navbar/Menu';
import { Youtube } from './styles/navbar/Youtube';
import { YoutubeLogo } from './styles/navbar/YoutubeLogo';
import Logo from './images/youtube-logo.png';
import { YoutubeLegend } from "./styles/navbar/YoutubeLegend";
import { Search } from "./styles/navbar/Search";
import { SearchInput } from "./styles/navbar/SearchInput";
import { Input } from "./styles/navbar/Input";
import { Keyboard } from "./styles/navbar/Keyboard";
import { SearchButton } from "./styles/navbar/SearchButton";
import { Icon } from "./styles/navbar/Icon";
import { Microphone } from "./styles/navbar/Microphone";
import { UserSettings } from "./styles/navbar/UserSettings";
import { UserIcon } from "./styles/navbar/UserIcon";
import { Avatar } from "./styles/navbar/Avatar";
 

export const Navbar: React.FC = () => {
    return(
        <NavContainer>
            <Symbol>
                <Menu className="material-icons">menu</Menu>
                <Youtube>
                    <YoutubeLogo src={Logo} />
                    <YoutubeLegend>
                        <Link to='/home'>Youtube</Link>
                    </YoutubeLegend>
                </Youtube>
            </Symbol>
            <Search>
                <SearchInput>
                    <Input type="search" placeholder="Search"/>
                    <Keyboard className="material-icons">keyboard</Keyboard>
                    <SearchButton>
                        <Icon className="material-icons">search</Icon>
                    </SearchButton>
                </SearchInput>
                <Microphone className="material-icons">mic</Microphone>
            </Search>
            <UserSettings>
                <Icon className="material-icons">video_call</Icon>
                <Icon className="material-icons">apps</Icon>
                <Icon className="material-icons">notifications</Icon>
                <UserIcon>
                    <Avatar />
                </UserIcon>
            </UserSettings>
        </NavContainer>
    )
}