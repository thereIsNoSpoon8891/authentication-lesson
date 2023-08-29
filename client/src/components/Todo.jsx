

const Todo = (props) => {

    const {title, description, imgUrl, _id} = props

    return(
        <div className="todo">
            <h2>
                {title}
            </h2>
            <h3>
                {description}
            </h3>
            <img width="200px" src={imgUrl} />
            <button id={_id}>
                delete
            </button>
        </div>
    )
}

export default Todo