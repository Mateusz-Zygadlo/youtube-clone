import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { NavContainer } from './styles/Navbar/NavContainer';
import { Symbol } from './styles/Navbar/Symbol';
import { Menu } from './styles/Navbar/Menu';
import { Youtube } from './styles/Navbar/Youtube';
import { YoutubeLogo } from './styles/Navbar/YoutubeLogo';
import Logo from './images/youtube-logo.png';
import { YoutubeLegend } from "./styles/Navbar/YoutubeLegend";
import { Search } from "./styles/Navbar/Search";
import { SearchInput } from "./styles/Navbar/SearchInput";
import { Input } from "./styles/Navbar/Input";
import { SearchButton } from "./styles/Navbar/SearchButton";
import { Icon } from "./styles/Navbar/Icon";
import { Microphone } from "./styles/Navbar/Microphone";
import { UserSettings } from "./styles/Navbar/UserSettings";
import { UserIcon } from "./styles/Navbar/UserIcon";
import { Avatar } from "./styles/Navbar/Avatar";
import { Login } from "./styles/Navbar/Login";
import { Button } from "./styles/Navbar/Button";
import { Paragraph } from "./styles/Navbar/Paragraph";

interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
}

export const Navbar: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth }) => {
    const ref = useRef<any>(null);
    const [testWidth, setWidth] = useState<boolean>(false);
    const [widthSize, setWidthSize] = useState<number>(1400);
    const [searchMobile, setSearchMobile] = useState<boolean>(false);

    const clickNavbarMenu = (props: boolean): void => {
        if(widthSize > 1300){
            openNavFunc(!props);
            setMobileWidthFunc(!props);
        }else{
            openNavFunc(!props);
        }
    }

    useEffect(() => {
        const resizeFunc = () => {
            if(window.innerWidth){
                if(window.innerWidth < 700){
                    setWidth(true);
                }else{
                    setWidth(false);
                    setSearchMobile(false);
                }
                setWidthSize(window.innerWidth);
            }
        }

        window.addEventListener('resize', resizeFunc);

        return () => {
            window.removeEventListener('resize', resizeFunc);
        }
    });

    return(
        <>
            {!testWidth ? 
                <NavContainer ref={ref}>
                    <Symbol>
                        <Menu className="material-icons" onClick={(): void => {clickNavbarMenu(isOpen)}}>menu</Menu>
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
                            <SearchButton>
                                <Icon className="material-icons">search</Icon>
                            </SearchButton>
                            <Microphone className="material-icons">mic</Microphone>
                        </SearchInput>
                    </Search>
                    {isLogin ? 
                        <UserSettings>
                            <Icon className="material-icons">video_call</Icon>
                            <Icon className="material-icons">apps</Icon>
                            <Icon className="material-icons">notifications</Icon>
                            <UserIcon>
                                <Avatar />
                            </UserIcon>
                        </UserSettings>
                    :
                        <Login>
                            <Icon className="material-icons">apps</Icon>
                            <Icon className="material-icons">more_vert</Icon>
                            <Button>
                                <Icon className="material-icons">account_circle</Icon>
                                <Paragraph>Login</Paragraph>
                            </Button>
                        </Login>
                    }
                </NavContainer>
            :
                <>
                    {!searchMobile ? 
                        <NavContainer>
                            <Symbol>
                                <Menu className="material-icons" onClick={(): void => {clickNavbarMenu(isOpen)}}>menu</Menu>
                                <Youtube>
                                    <YoutubeLogo src={Logo} />
                                    <YoutubeLegend>
                                        <Link to='/home'>Youtube</Link>
                                    </YoutubeLegend>
                                </Youtube>
                            </Symbol>
                        {widthSize > 470 ? 
                            <Search>
                                <Icon className="material-icons" onClick={()=>{setSearchMobile(true)}}>search</Icon>
                                <Microphone className="material-icons">mic</Microphone> 
                            </Search>   
                        : 
                            <Search>
                                <Icon className="material-icons" onClick={()=>{setSearchMobile(true)}}>search</Icon>
                            </Search>
                        }
                            {isLogin ? 
                                <UserSettings>
                                    <Icon className="material-icons">video_call</Icon>
                                    <Icon className="material-icons">apps</Icon>
                                    <Icon className="material-icons">notifications</Icon>
                                    <UserIcon>
                                        <Avatar />
                                    </UserIcon>
                                </UserSettings>
                            :
                                <Login>
                                    <Icon className="material-icons">apps</Icon>
                                    <Icon className="material-icons">more_vert</Icon>
                                    <Button>
                                        <Icon className="material-icons">account_circle</Icon>
                                        <Paragraph>Login</Paragraph>
                                    </Button>
                        </Login>
                            }
                        </NavContainer>
                    : 
                        <NavContainer>
                            <Search center='center'>
                                <SearchButton right='noRight' onClick={()=>{setSearchMobile(false)}}>
                                    <Icon className="material-icons">arrow_back</Icon>
                                </SearchButton>
                                <Input padding='noPadding' placeholder='Search' />
                                <Microphone margin='margin' className="material-icons">mic</Microphone>
                            </Search>
                        </NavContainer>
                    }
                </>
            }
        </>
    )
}