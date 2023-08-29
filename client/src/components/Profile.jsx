import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Todo from './Todo'
import { UserContext } from '../context/UserProvider'
import {useContext} from 'react'



const Profile = () => {

const {user: {username}, todos} = useContext(UserContext)

    return(
        <div className="profile">
            <h1>Welcome {username}</h1>
            <h3>Add todo</h3>
            <TodoForm />
            <h3>Your Todos</h3>
            <TodoList todos={todos} />
        </div>
    )
}

export default Profile