import { createContext, useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'

const ErrorContext = createContext()

const ErrorProvider = ({children}) => {
    const [errors, setErrors] = useState([])
    // const [ i, setI ] = useState(null)
    const removeError = (e) => {
        const err = parseInt(e.target.parentElement.parentElement.id)
        // debugger
        // console.log(e.target.parentElement.parentElement.textContent)
        // console.log(err)
        // const i = parseInt(err.split(' ')[0])
        // if(i >= 0){
        setErrors(current => current.filter( (c, index) => index !== err))
        // {debugger}
                // {debugger}
                // current.filter(eString => 
                // console.log(err, eString)
                // eString !== err
                // )
                // )
        // }
    }
    
    // console.log(er)
    // useEffect (() => [
    // ],[er])

    console.log(errors)
    const mappedErrors = errors.map((error, index) => 
        <div key={index} className='error'>
            {error}
            <button id={index} onClick={removeError} className='error_btn'>
                <FaTimes/>
            </button>
        </div>
    )
    

    return (
        <ErrorContext.Provider value={{errors, setErrors, mappedErrors}}>
            {children}
        </ErrorContext.Provider>
    )
}

export {ErrorContext, ErrorProvider}