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
import { Link } from 'react-router-dom'

interface Props{
    isLogin: boolean;
}

export const Category: React.FC<Props> = ({ isLogin }) => {
    return(
        <>
            <CategoryContainer>
                <Popular>
                    <CategoryCard>
                        <Link to='/home'>
                            <Icon className="material-icons">home</Icon>
                            <Paragraph>Home</Paragraph>
                        </Link>
                    </CategoryCard>
                    <CategoryCard>
                        <Link to='explore'>
                            <Icon className="material-icons">explore</Icon>
                            <Paragraph>Explore</Paragraph>
                        </Link>
                    </CategoryCard>
                    <CategoryCard>
                        <Link to='subscriptions'>
                            <Icon className="material-icons">subscriptions</Icon>
                            <Paragraph>Subscription</Paragraph></Link>
                    </CategoryCard>
                </Popular>
                <UserSection>
                    <CategoryCard>
                        <Icon className="material-icons">video_library</Icon>
                        <Paragraph>Library</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">history</Icon>
                        <Paragraph>History</Paragraph>
                    </CategoryCard>
                    {isLogin ? 
                        <>
                            <CategoryCard>
                                <Icon className="material-icons">watch_later</Icon>
                                <Paragraph>Watch later</Paragraph>
                            </CategoryCard>
                            <CategoryCard>
                                <Icon className="material-icons">thumb_up</Icon>
                                <Paragraph>Liked videos</Paragraph>
                            </CategoryCard>
                        </>
                    :       
                        null
                    }
                </UserSection>
                {isLogin ? 
                    <SubscriptionSection>
                        <Paragraph subs="subs">Subscriptions</Paragraph>
                        <SubscriptionCard>
                            <UserAvatar>
                                <AvatarImage />
                            </UserAvatar>
                            <UserNickname>test one</UserNickname>
                        </SubscriptionCard>
                        <SubscriptionCard>
                            <UserAvatar>
                                <AvatarImage />
                            </UserAvatar>
                            <UserNickname>test two</UserNickname>
                        </SubscriptionCard>
                        <SubscriptionCard>
                            <UserAvatar>
                                <AvatarImage />
                            </UserAvatar>
                            <UserNickname>test three</UserNickname>
                        </SubscriptionCard>
                        <SubscriptionCard>
                            <UserAvatar>
                                <AvatarImage />
                            </UserAvatar>
                            <UserNickname>test four</UserNickname>
                        </SubscriptionCard>
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
                    <CategoryCard>
                        <Icon className="material-icons">smart_display</Icon>
                        <Paragraph>Youtube premium</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">movie</Icon>
                        <Paragraph>Movies</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">sports_esports</Icon>
                        <Paragraph>Gaming</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">stream</Icon>
                        <Paragraph>Live</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">emoji_events</Icon>
                        <Paragraph>Sports</Paragraph>
                    </CategoryCard>
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
                <MoreCategory>
                    <CategoryCard>
                        <Icon className="material-icons">settings</Icon>
                        <Paragraph>Settings</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">report</Icon>
                        <Paragraph>Report history</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">help</Icon>
                        <Paragraph>Help</Paragraph>
                    </CategoryCard>
                    <CategoryCard>
                        <Icon className="material-icons">feedback</Icon>
                        <Paragraph>Send feedback</Paragraph>
                    </CategoryCard>
                </MoreCategory>
                <MoreCategory border="none">
                    <CategoryCard>
                        <Paragraph>2021</Paragraph>
                    </CategoryCard>
                </MoreCategory>
            </CategoryContainer>
        </>
    )
}