import { Text, View } from "react-native"


type Props = {
    produto: string;
    quantidade: number;
    marca: string;
    descricao: string;
    imagem: string;
    preco: number;
}

export const Loja = (Props: Props) => {
    return (
        <View>  
        <Text>loja imports brasil</Text>
            <Text>
                produto:{Props.produto}
                quantidade: UN{Props.quantidade} 
                marca:{Props.marca} 
                descrição:{Props.descricao} 
                {Props.imagem} 
                preço:R${Props.preco}
            </Text>
        </View>      
    )
}