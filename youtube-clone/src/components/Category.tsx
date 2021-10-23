import React from 'react';
import { CategoryContainer } from './styles/categorySection/CategoryContainer';
import { Popular } from './styles/categorySection/Popular';
import { CategoryCard } from './styles/categorySection/CategoryCard';
import { Icon } from './styles/navbar/Icon';
import { Paragraph } from './styles/categorySection/Paragraph';
import { UserSection } from './styles/categorySection/UserSection';
import { LoginSection } from './styles/categorySection/LoginSection';
import { Button } from './styles/navbar/Button';
import { SubscriptionSection } from './styles/categorySection/SubscriptionsSection';
import { SubscriptionCard } from './styles/categorySection/SubscriptionCard';
import { UserAvatar } from './styles/categorySection/UserAvatar';
import { UserNickname } from './styles/categorySection/UserNickname';
import { AvatarImage } from './styles/categorySection/AvatarImage';
import { MoreCategory } from './styles/categorySection/MoreCategory';
import { NavLink } from 'react-router-dom'

interface Props{
    isLogin: boolean;
}

export const Category: React.FC<Props> = ({ isLogin }) => {
    return(
        <>
            <CategoryContainer>
                <Popular>
                    <CategoryCard>
                        <NavLink to='/home' activeClassName='nowPage'>
                            <Icon className="material-icons">home</Icon>
                            <Paragraph>Home</Paragraph>
                        </NavLink>
                    </CategoryCard>
                    <CategoryCard>
                        <NavLink to='/explore' activeClassName='nowPage'>
                            <Icon className="material-icons">explore</Icon>
                            <Paragraph>Explore</Paragraph>
                        </NavLink>
                    </CategoryCard>
                    <CategoryCard>
                        <NavLink to='/subscriptions' activeClassName='nowPage'>
                            <Icon className="material-icons">subscriptions</Icon>
                            <Paragraph>Subscription</Paragraph></NavLink>
                    </CategoryCard>
                </Popular>
                <UserSection>
                    <CategoryCard>
                        <NavLink to="/library" activeClassName='nowPage'>
                            <Icon className="material-icons">video_library</Icon>
                            <Paragraph>Library</Paragraph>
                        </NavLink>
                    </CategoryCard>
                    <CategoryCard>
                        <NavLink to="/history" activeClassName='nowPage'>
                            <Icon className="material-icons">history</Icon>
                            <Paragraph>History</Paragraph>
                        </NavLink>
                    </CategoryCard>
                    {isLogin ? 
                        <>
                            <CategoryCard>
                                <NavLink to='/watchLater' activeClassName='nowPage'>
                                    <Icon className="material-icons">watch_later</Icon>
                                    <Paragraph>Watch later</Paragraph>
                                </NavLink>
                            </CategoryCard>
                            <CategoryCard>
                                <NavLink to='/liked' activeClassName='nowPage'>
                                    <Icon className="material-icons">thumb_up</Icon>
                                    <Paragraph>Liked videos</Paragraph>
                                </NavLink>
                            </CategoryCard>
                        </>
                    :       
                        null
                    }
                </UserSection>
                {isLogin ? 
                    <SubscriptionSection>
                        <Paragraph subs="subs">Subscriptions</Paragraph>
                        <NavLink to='/channel/home' activeClassName='nowPage'>
                            <SubscriptionCard>
                                <UserAvatar>
                                    <AvatarImage />
                                </UserAvatar>
                                <UserNickname>test one</UserNickname>
                            </SubscriptionCard>
                        </NavLink>
                    </SubscriptionSection>
                :
                    <LoginSection>
                        <Paragraph>Sign in to like videos, comment, and subscribe.</Paragraph>
                        <Button>
                            <Icon className="material-icons">account_circle</Icon>
                            <Paragraph>Login</Paragraph>
                        </Button>
                    </LoginSection>
                }
                <MoreCategory>
                    <Paragraph subs="subs">More from Youtube</Paragraph>
                    <NavLink to='/explore/movies/browse' activeClassName='nowPage'>
                        <CategoryCard>
                            <Icon className="material-icons">movie</Icon>
                            <Paragraph>Movies</Paragraph>
                        </CategoryCard>
                    </NavLink>
                    <NavLink to='/explore/gaming' activeClassName='nowPage'>
                        <CategoryCard>
                            <Icon className="material-icons">sports_esports</Icon>
                            <Paragraph>Gaming</Paragraph>
                        </CategoryCard>
                    </NavLink>
                    <NavLink to='/explore/live/home' activeClassName='nowPage'>
                        <CategoryCard>
                            <Icon className="material-icons">stream</Icon>
                            <Paragraph>Live</Paragraph>
                        </CategoryCard>
                    </NavLink>
                    <NavLink to='/explore/sports' activeClassName='nowPage'>
                        <CategoryCard>
                            <Icon className="material-icons">emoji_events</Icon>
                            <Paragraph>Sports</Paragraph>
                        </CategoryCard>
                    </NavLink>
                </MoreCategory>
                {isLogin ? 
                    null
                :
                    <MoreCategory>
                        <CategoryCard>
                            <Icon className="material-icons">add</Icon>
                            <Paragraph>Browse Channels</Paragraph>
                        </CategoryCard>
                    </MoreCategory>
                }
                <MoreCategory border="none">
                    <CategoryCard marginBottom="marginBottom">
                        <Paragraph>2021</Paragraph>
                    </CategoryCard>
                </MoreCategory>
            </CategoryContainer>
        </>
    )
}