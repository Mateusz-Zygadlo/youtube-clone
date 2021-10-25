import React, { useState, useEffect } from 'react'
import { Routes } from './Routes';
import { auth } from './LoginFunction';

export const SameProps: React.FC = () => {
    const [isOpen, setNavOpen] = useState<boolean>(true);
    const [isLogin, setLogin] = useState<boolean>(false);
    const [mobileWidth, setMobileWidth] = useState<boolean>(false);
    const [minimum, setMinimum] = useState<boolean>(false);

    auth.onAuthStateChanged((user) => {
        if(user){
            setLogin(true);
        }else{
            setLogin(false);
        }
    });

    const setMobileWidthFunc = (props: boolean): void => {
        setMobileWidth(!props);
    }

    const openNav = (props: boolean): void => {
        setNavOpen(props);
    }

    const setLoginFunc = (props: boolean): void => {
        setLogin(props);
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
        <Routes 
            openNavFunc={openNav}
            isOpen={isOpen}
            isLogin={isLogin}
            setMobileWidthFunc={setMobileWidthFunc}
            mobileWidth={mobileWidth}
            openNav={openNav}
            minimum={minimum}
            setLoginFunc={setLoginFunc} />
    );
}