import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

function ProtectedRoutes (props) {
    
    const {token, children} = props 

    const nav = useNavigate()

    const render = () => {
        // the video is outdated... useNavigate needs to be in a useEffect,
        // this way, the user wil NOT be redirected until the component is rendered...
        useEffect(()=>{
            nav("/")
        })
    }

    
    return token ? children : render()
    
}

export default ProtectedRoutes