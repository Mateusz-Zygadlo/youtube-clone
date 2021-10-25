import { LoginContainer } from '../styles/LoginContainer';
import { LoginParagraph } from '../styles/LoginParagraph';
import { LoginButton } from '../styles/LoginButton';
import { ButtonSection } from '../styles/ButtonSection';
import { Link } from 'react-router-dom';
import { auth , provider} from '../LoginFunction';
import { signInWithPopup } from "firebase/auth";

const LoginFunc = (setLoginFunc: (props: boolean) => void) => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;

        console.log(user);
        
        setLoginFunc(true);
    }).catch((err) => {
        console.log(err)
    });
}

interface Props{
    setLoginFunc(props: boolean): void;
}

export const LoginPage: React.FC<Props> = ({ setLoginFunc }) => {
    return(
        <LoginContainer>
            <LoginParagraph>Login</LoginParagraph>
            <ButtonSection>
                <Link to='/home'>
                    <LoginButton onClick={()=>{LoginFunc(setLoginFunc)}}>Login with google</LoginButton>
                </Link>
            </ButtonSection>
            <Link to="/home">
                <LoginButton>back</LoginButton>
            </Link>
        </LoginContainer>
    );
}