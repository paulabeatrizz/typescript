export interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export enum Countries {
    Brazil = "Brazil",
    France = "France",
    Italy = "Italy",
}


export const User = (props: Props) => {
   // const {} = useContext(UserContext);
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is married" : "is single(lonely)"}</p>
            <p>Country of origin: {props.country} </p>
        </div>
    )
}