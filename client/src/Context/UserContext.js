import { createContext, useState, useEffect, useContext } from "react";
import { ErrorContext } from "./ErrorContext";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const { errors, setErrors } = useContext(ErrorContext)
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
                    // {debugger}
                    setErrors(Object.entries(data).map(e=> `${e[0]} ${e[1]}`))
                })
            }
        })
        .catch(err => alert(err))
    }

    const logout = (navigate) => {
        fetch('/logout', {
            method: 'DELETE',
        })
        .then(resp => {
            if (resp.ok) {
                    setUser(null)
                    navigate('/')
            } else {
                resp.json().then(messageObj => alert(messageObj.error))
            }
        })
    }

    const Signup = (e, signup, navigate) => {
        // console.log(signup)
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
                resp.json().then(data => 
                    // {debugger}
                    setErrors(Object.entries(data.message).map( e=> `${e[0]} ${e[1]}`))
                )
            }
        })
    }
    }
    
    const updatePfp = (url) => {
        fetch(`/users_pfp/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(url)
        })
        .then(resp => {
            if (resp.status === 202) {
                resp.json().then(data => {
                    // console.log(data)
                    setUser(data)
                })
            }
        })
    }
    // console.log(user)
    const oauth = (userObject, navigate) => {
        // console.log(userObject)
        fetch('/oauth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject)
        })
        .then(resp => {
            if (resp.status === 201) {
                resp.json().then(data => {
                    setUser(data)
                    navigate('/')
                })
            }
        }
        )
    }

    const updateUser = (e, updateP, navigate, setUpdateP, user) => {
        e.preventDefault()
        if (user.key.length <= 40) {
            fetch(`/users/${user.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateP)
            })
            .then(resp => {
                if (resp.status === 202) {
                    resp.json().then( data => {
                        // console.log(data)
                        setUser(data)
                        navigate('/profile')
                    })
                }
            })
        } else {
            console.log('key word cannot reach beyond 40 characters')
        }
    }

    const deleteUser = (user, navigate) => {
        fetch(`/users/${user.id}`, {
            method: 'DELETE',
        })
        .then(resp => {
            if (resp.status === 204) {
                setUser(null)
                navigate('/')
            }
        })
    }

    return (
        <UserContext.Provider value={{user, setUser, fetchCurrentUser, Login, logout, Signup, updatePfp, oauth, updateUser, deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}