import { useContext } from 'react' 
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { UserContext } from '../Context/UserContext';

const OauthLogin = () => {
    require('react-dom');
    window.React2 = require('react');
    console.log(window.React1 === window.React2);
    // const [profile, setProfile] = useState(null)
    const {user, setUser} = useContext(UserContext)

    return (
        <>
            {!user ? 
                <LoginSocialFacebook
                appId='1442506773159817'
                onResolve={response => {
                    setUser(response.data)
                }}
                onReject={error => {
                    console.log(error)
                }}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook>
                :
                ''
            }
            {user ? 
            <div>
                <h1>
                    {user.name}
                </h1>
            </div>
            :
            ''
            }
        </>
    );
}

export default OauthLogin;
