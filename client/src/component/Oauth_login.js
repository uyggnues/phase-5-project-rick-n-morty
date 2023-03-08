import { useContext, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { UserContext } from '../Context/UserContext';
// import { LoginSocialFacebook } from 'reactjs-social-login';
// import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const OauthLogin = () => {
    // const [profile, setProfile] = useState(null)
    const {user, setUser, oauth} = useContext(UserContext)
    const navigate = useNavigate()


    const handleCallBackResponse = (response) => {
        console.log( 'jwt token' + response.credential)
        const userObject = jwt_decode(response.credential)
        console.log(userObject)
        if(userObject !== {}) {
            oauth(userObject, navigate)
        }
    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
          client_id: '199968078634-7r58u7sopfndosq5e6gkob8bb8jo1tj6.apps.googleusercontent.com',
          callback: handleCallBackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: 'outline', size: 'large'}
        )
    }, [])

    return (
        <div>
            <div id='signInDiv'></div>
        </div>
    );
}

export default OauthLogin;










//  {!user ? 
//                 <LoginSocialFacebook
//                 appId='1442506773159817'
//                 onResolve={response => {
//                     console.log(response)
//                     facebook(response.data)
//                 }}
//                 onReject={error => {
//                     console.log(error)
//                 }}
//                 >
//                     <FacebookLoginButton />
//                 </LoginSocialFacebook>
//                 :
//                 ''
//             }