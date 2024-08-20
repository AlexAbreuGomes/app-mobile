import { View, Text, StyleSheet } from "react-native";

type Props = {
    id: number;
    nome: string;
    titulos: number;
}

 export const UserChampions = (props: Props) => {
    return(
        <View style={styles.container}>
            <Text>
                Nome: {props.nome} {props.titulos} titulos
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: "#3887ff",
        margin: 10,
        textAlign: "left",
    },

    
})