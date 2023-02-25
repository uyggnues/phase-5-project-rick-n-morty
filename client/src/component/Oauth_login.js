import { useContext } from 'react' 
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom'

const OauthLogin = () => {
    // const [profile, setProfile] = useState(null)
    const {user, setUser, facebook} = useContext(UserContext)
    const navigate = useNavigate()

    console.log(user)

    return (
        <>
            {!user ? 
                <LoginSocialFacebook
                appId='1442506773159817'
                onResolve={response => {
                    debugger
                    facebook(response.data)
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
        </>
    );
}

export default OauthLogin;
