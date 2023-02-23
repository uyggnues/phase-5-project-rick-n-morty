import { createContext, useState, useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const fetchCurrentUser = () => {
        return fetch("/authorized_user")
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((user) => {
                    setUser(user);
                });
            } else {
                setUser(null)
            }
        })
    }

    const Login = (e, login, navigate) => {
        e.preventDefault()
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(login)
        })
        .then(resp => {
            if (resp.status === 200) {
                resp.json().then(userObj => { 
                    setUser(userObj)
                    navigate('/')
            })
            } else {
                resp.json().then(data => {
                    console.log(data)
                    // setErrors(data.error)
                })
            }
        })
        .catch(err => alert(err))
    }

    const logout = () => {
        fetch('/logout', {
            method: 'DELETE',
        })
        .then(resp => {
            if (resp.ok) {
                    setUser(null)
            } else {
                resp.json().then(messageObj => alert(messageObj.error))
            }
        })
    }

    const Signup = (e, signup, navigate) => {
        e.preventDefault()
        // debugger
        if(signup.password === signup.confirm_password) {
            fetch('/signup', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(signup)
        })
        .then(resp => {
            if (resp.status === 201) {
                resp.json().then(userObj => { 
                    setUser(userObj)
                    navigate('/')
                })
            } else {
                resp.json().then(data => console.log(data))
            }
        })
    }
    }
    

    return (
        <UserContext.Provider value={{user, setUser, fetchCurrentUser, Login, logout, Signup}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}