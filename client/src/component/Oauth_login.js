import { useState } from 'react' 
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

const OauthLogin = () => {
    const [profile, setProfile] = useState(null)

    return (
        <>
            {!profile ? 
                <LoginSocialFacebook
                appId='1442506773159817'
                onResolve={response => {
                    setProfile(response.data)
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
            {profile ? 
            <div>
                <h1>
                    {profile.name}
                </h1>
                <img src={profile.picture.data.url} alt='pfp'/>
            </div>
            :
            ''
            }
        </>
    );
}

export default OauthLogin;
