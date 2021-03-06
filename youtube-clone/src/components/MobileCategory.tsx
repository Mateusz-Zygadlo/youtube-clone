import { MobileCategoryContainer } from './styles/CategorySection/MobileCategoryContainer';
import { MobileIconCard } from './styles/CategorySection/MobileIconCard';
import { Icon } from './styles/Navbar/Icon';
import { Paragraph } from './styles/CategorySection/Paragraph';
import { NavLink } from 'react-router-dom';

export const MobileCategory = () => {
    return(
        <>
            <MobileCategoryContainer>
                <MobileIconCard>
                    <NavLink to="/home" activeClassName='nowPage'>
                        <Icon mobile='mobile' className="material-icons">home</Icon>
                        <Paragraph mobile='mobile'>Home</Paragraph>
                    </NavLink>
                </MobileIconCard>
                <MobileIconCard>
                    <NavLink to="/explore" activeClassName='nowPage'>
                        <Icon mobile='mobile' className="material-icons">explore</Icon>
                        <Paragraph mobile='mobile'>Explore</Paragraph>
                    </NavLink>
                </MobileIconCard>
                <MobileIconCard>
                    <NavLink to="/subscriptions" activeClassName='nowPage'>
                        <Icon mobile='mobile' className="material-icons">subscriptions</Icon>
                        <Paragraph mobile='mobile'>Subscription</Paragraph>
                    </NavLink>
                </MobileIconCard>
                <MobileIconCard>
                    <NavLink to="/library" activeClassName='nowPage'>
                        <Icon mobile='mobile' className="material-icons">video_library</Icon>
                        <Paragraph mobile='mobile'>Library</Paragraph>
                    </NavLink>
                </MobileIconCard>
            </MobileCategoryContainer>
        </>
    )
}