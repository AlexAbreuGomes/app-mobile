import { Text } from "react-native"

type Props = {
    name: string;
    age: number;
}

 export const Welcome = (props: Props) => {
    return (
        <Text>{props.age} {props.name}</Text>
    );
}

