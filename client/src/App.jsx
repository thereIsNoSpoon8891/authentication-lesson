import {Route, Routes, useNavigate} from "react-router-dom"
import { UserContext } from './context/UserProvider'
import {useContext} from "react"
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import Nav from './components/Nav'
import ProtectedRoutes from "./components/ProtectedRoutes"
import './app.css'



function App() {
  const {token} = useContext(UserContext)

  return (
    <>
      {token && <Nav />}
    <Routes>
        <Route path='/' element={token ? <Profile /> : <Auth />} />

        <Route path='/profile' element={ 
        <ProtectedRoutes
         token={token}// pass value as props to be used as the condition
         >

            <Profile /> {/* <= route to be protected */}

          </ProtectedRoutes>} />

          <Route
           path="/public"
            element={
            <ProtectedRoutes
            token={token}
            >
              <Public /> {/*  <= route to be protected */}
            </ProtectedRoutes>
          } />
    </Routes>
    </>
      
    
  )
}

export default App
