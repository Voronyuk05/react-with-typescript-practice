import { ITodo } from "../store/todosSlice"

export const TodoItem = ({item, removeTodo}: {item: ITodo, removeTodo: (id: number) => void}) => {

    const handleRemove = () => {
        removeTodo(item.id)
    }

    return (
        <li>
            <p>{item.text}</p>
            <button type="button" onClick={handleRemove}>delete</button>
        </li>
    )
}