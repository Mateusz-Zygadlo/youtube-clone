import React, { useState, useEffect } from 'react';
import { MobileCategory } from './MobileCategory';
import { Category } from './Category';

interface Props{
    isOpen: boolean;
    openNavFunc(props: boolean): void;
    isLogin: boolean;
}

export const CategorySection: React.FC<Props> = ({ isOpen, openNavFunc, isLogin }) => {
    const [widthSize, setWidthSize] = useState<number>(1400);

    useEffect(() => {
        const resizeFunc = () => {
            if(window.innerWidth){
                setWidthSize(window.innerWidth);
            }
            if(window.innerWidth > 1300){
                openNavFunc(true);
            }
            if(window.innerHeight > 700){
                openNavFunc(false);
            }
            console.log(widthSize);
        }

        window.addEventListener('resize', resizeFunc);

        return () => {
            window.removeEventListener('resize', resizeFunc);
        }
    });

    return(
        <>
            {widthSize > 1300 ?
                isOpen ? <Category isLogin={isLogin} /> : <MobileCategory />
            : (widthSize > 700) ?
                isOpen ? <Category isLogin={isLogin} /> : <MobileCategory />
            : 
                isOpen ? <Category isLogin={isLogin} /> : null
            }
        </>
    )
} 