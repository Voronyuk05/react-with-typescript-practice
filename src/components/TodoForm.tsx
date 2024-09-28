import { ChangeEvent, FormEvent, useState } from "react"

export const TodoForm = ({addTodo}: {addTodo: (text: string) => void}) => {
    const [text, setText] = useState<string>('')
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()

        addTodo(text)
        setText("")
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" id="text" placeholder="text" onChange={handleInput} />
            <button type="submit">Submit</button>
        </form>
    )
}