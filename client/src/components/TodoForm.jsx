
import {useState, useContext} from 'react'
import { UserContext } from "../context/UserProvider";


const TodoForm = () => {

    const {addTodo} = useContext(UserContext)

    const initInputs ={
        title: "",
        description: "",
        imgUrl: ""
    }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const {name, value} = e.target
            setInputs(prevInputs => ({
                ...prevInputs,
                [name]: value
            }))
    }

    const handleSubmit = e => {
        e.preventDefault();
            addTodo(inputs)
            setInputs(initInputs)
    }

    const {title, description, imgUrl} = inputs
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='title'
                value={title}
                onChange={handleChange}
                placeholder='Title'
                />

                <input 
                type='text'
                name='description'
                value={description}
                onChange={handleChange}
                placeholder='Description'
                />

                <input 
                type='text'
                name='imgUrl'
                value={imgUrl}
                onChange={handleChange}
                placeholder='Image URL'
                />

                <button>Add Todo</button>
            </form>
        </>
    )
}

export default TodoForm