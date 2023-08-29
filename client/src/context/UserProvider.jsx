import { createContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const UserContext = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserContextProvider = (props) => {

    const nav = useNavigate()

    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
         todos: [],
         errorMessage: ""
        }

    const [user, setUser] = useState(initState)
    
    const signUp = credentials => {
        console.log("test")
        axios.post("api/authenticate/signup", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUser(prevUser => ({
                    ...prevUser,
                    user,
                    token
                }))
            })
            .catch(err => handleError(err.response.data.errorMessage))
    }

    const userLogin = credentials => {
        axios.post("api/authenticate/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserTodos()
            setUser(prevUser => ({
                ...prevUser,
                user,
                token
            }))
        })
            .catch(err => handleError(err.response.data.errorMessage))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser({
            user: {},
            token: "",
            todos: []
        })
    }

    const addTodo = newTodo => {
        userAxios.post("/api/authenticate/todo", newTodo)
            .then(res => {
                setUser(prevUser => ({
                        ...prevUser,
                        todos: [...prevUser.todos, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errorMessage))
    }

    const getUserTodos = () => {
        userAxios.get("/api/authenticate/todo/user")
            .then(res => {
                setUser(prevUser => ({
                    ...prevUser,
                    todos: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errorMessage))
    }

    const handleError = errorMessage => {
        setUser(prevUser => ({
            ...prevUser,
            errorMessage
        }))
    }

    const resetError = () => {
        setUser( prevUser => ({
            ...prevUser,
            errorMessage: ""
        }))
    }

//console.log(user)
    return(
        <UserContext.Provider
        value={{
            ...user,
            signUp,
            userLogin,
            logout,
            addTodo,
            resetError
        }}
        >
                {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}

