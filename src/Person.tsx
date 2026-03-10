import { useContext } from "react"
import { UserContext } from "./UserContextProvider"

export interface Props {
    name: string
    age: number
    isMarried: boolean
}

export const User = (props: Props) => {
    const {} = useContext(UserContext);
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is married" : "is single(lonely)"}</p>
        </div>
    )
}