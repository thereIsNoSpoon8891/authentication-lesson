



const AuthForm = props => {

    const {
        handleChange,
        handleSignUp,
        handleLogin,
        buttonText,
        errorMessage,
        inputs: {
            username,
            password
        }
    } = props

    const dynamicHandle = e => {
        e.preventDefault();
        if(buttonText === "Sign up"){
            handleSignUp()
        } else if (buttonText === "Login"){
            handleLogin()
        }
    }

    return(
    <div className="form--container">

        <form className="auth--form">

            <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="name--input"
            />

            <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="password--input"
            />

            <button className="dynamic--button" onClick={ dynamicHandle }>{buttonText}</button>
            {errorMessage && <p className="err">{errorMessage}</p>}
        </form>
    </div>
    )
}

export default AuthForm