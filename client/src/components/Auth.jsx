import {useState, useContext} from "react"
import AuthForm from "./AuthForm";
import { UserContext } from "../context/UserProvider";
import {useNavigate} from "react-router-dom"


const Auth = () => {

    const nav = useNavigate()

const {signUp, userLogin,resetError, errorMessage } = useContext(UserContext)// destructure to get the stuff we need

    const initInputs = {
        username: "",
        password: ""
    }

    const [inputs, setInputs] = useState(initInputs)

    const [toggle, setToggle] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
}


    const handleSignUp = e => {

            signUp(inputs)

}

    const handleLogin = e => {

            userLogin(inputs)

}

const toggleForm = () => {
    setToggle(prev => !prev)
    resetError()
}
    return(
        <div className="auth--container">
            <h1 className="title">
                Todo App
            </h1>
            {!toggle ? 
                <>
                    <AuthForm 
                    handleChange={handleChange}
                    handleSignUp={handleSignUp}
                    inputs={inputs}
                    buttonText="Sign up"
                    errorMessage={errorMessage}
                    />
                    <p className="toggle--link" onClick={toggleForm}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                    handleChange={handleChange}
                    handleLogin={handleLogin}
                    inputs={inputs}
                    buttonText="Login"
                    errorMessage={errorMessage}
                    />
                    <p className="toggle--link" onClick={toggleForm}>Not a Member?</p>


                </>
            }
        </div>
    )
}

export default Auth