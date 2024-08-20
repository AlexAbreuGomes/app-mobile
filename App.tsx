import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image, Button, TouchableOpacity, FlatList } from "react-native";
import { Welcome } from "./components/welcome";
import { Loja } from "./components/loja";
import { useState } from "react";
import { UserChampions } from "./components/list-champions"

type user = {
  id: number;
  nome: string;
  titulos: number;
}

function app() {
  const [count, setCount] = useState(0);

  const list: user[] = [
    { "id": 1, "nome": "Michael Schumacher", "titulos": 7 },
    { "id": 2, "nome": "Lewis Hamilton", "titulos": 7 },
    { "id": 3, "nome": "Juan Manuel Fangio", "titulos": 5 },
    { "id": 4, "nome": "Alain Prost", "titulos": 4 },
    { "id": 5, "nome": "Sebastian Vettel", "titulos": 4 },
    { "id": 6, "nome": "Ayrton Senna", "titulos": 3 },
    { "id": 7, "nome": "Nelson Piquet", "titulos": 3 },
    { "id": 8, "nome": "Jack Brabham", "titulos": 3 },
    { "id": 9, "nome": "Niki Lauda", "titulos": 3 },
    { "id": 10, "nome": "Max Verstappen", "titulos": 3 },
    { "id": 11, "nome": "Jackie Stewart", "titulos": 3 },
    { "id": 12, "nome": "Emerson Fittipaldi", "titulos": 2 },
    { "id": 13, "nome": "Fernando Alonso", "titulos": 2 },
    { "id": 14, "nome": "Mika Häkkinen", "titulos": 2 },
    { "id": 15, "nome": "Jim Clark", "titulos": 2 },
    { "id": 16, "nome": "Alberto Ascari", "titulos": 2 },
    { "id": 17, "nome": "Graham Hill", "titulos": 2 },
    { "id": 18, "nome": "Giuseppe Farina", "titulos": 1 },
    { "id": 19, "nome": "Mike Hawthorn", "titulos": 1 },
    { "id": 20, "nome": "Phil Hill", "titulos": 1 },
    { "id": 21, "nome": "John Surtees", "titulos": 1 },
    { "id": 22, "nome": "Denny Hulme", "titulos": 1 },
    { "id": 23, "nome": "Jochen Rindt", "titulos": 1 },
    { "id": 24, "nome": "James Hunt", "titulos": 1 },
    { "id": 25, "nome": "Mario Andretti", "titulos": 1 },
    { "id": 26, "nome": "Jody Scheckter", "titulos": 1 },
    { "id": 27, "nome": "Alan Jones", "titulos": 1 },
    { "id": 28, "nome": "Keke Rosberg", "titulos": 1 },
    { "id": 29, "nome": "Nigel Mansell", "titulos": 1 },
    { "id": 30, "nome": "Damon Hill", "titulos": 1 },
    { "id": 31, "nome": "Jacques Villeneuve", "titulos": 1 },
    { "id": 32, "nome": "Kimi Räikkönen", "titulos": 1 },
    { "id": 33, "nome": "Jenson Button", "titulos": 1 },
    { "id": 34, "nome": "Nico Rosberg", "titulos": 1 }
  ]
  

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0){
    setCount(count - 1);
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
      data={list}
      renderItem={({item}) => (<UserChampions
        nome={item.nome}
        titulos={item.titulos}
        id={item.id}
        />)}

        keyExtractor={item => item.id.toString()}
      
      />
      <View>
      <View style={styles.titulo}>
      <Text style={styles.texto}>INSTAGRAM LH</Text>

     
        

      <View style={styles.botao}>
        <Button title="Clique Aqui" onPress={increment} />
        <Text style={styles.texto}>{count} Vitórias</Text>
        <Button title="Desclique Aqui" onPress={decrement} />
        </View>
      </View>

      <View style={styles.imagens}>
        <TouchableOpacity onPress={increment}>
          <Image
            source={{ uri: "https://cdn-2.motorsport.com/images/mgl/24vAg9e6/s8/lewis-hamilton-mercedes-1st-po-1.jpg" }}
            style={styles.imagem}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement}>
          <Image
            source={{ uri: "https://s2.glbimg.com/9EK3V9r4lISyQ6DSh6qdZAcbjEE=/smart/e.glbimg.com/og/ed/f/original/2020/12/28/gettyimages-1285770034.jpg" }}
            style={styles.imagem}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <Image
            source={{ uri: "https://www.autoracing.com.br/wp-content/uploads/2019/11/f1-hamilton-vermelho-ferrar.jpg" }}
            style={styles.imagem}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement}>
          <Image
            source={{ uri: "https://gp.cdn.pxr.nl/news/2019/12/02/v2_large_742d00b8db5c81ed3695e2a2b4b2df4d45282e51.jpg" }}
            style={styles.imagem}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <Image
            source={require("./assets/Desktop_LH2.jpg")}
            style={styles.imagem}
          />
        </TouchableOpacity>
      </View>
    </View>
          <Text style={styles.texto}>
            7x World champions
          </Text>
          <TouchableOpacity onPress={increment}>
          <Image source={require("./assets/Desktop_LH1.jpg")} style={styles.imagem2} />
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement}>
          <Image source={require("./assets/Desktop_LH2.jpg")} style={styles.imagem2} />
          </TouchableOpacity>
          {/* <Image source={require("./assets/Desktop 4 - 24 So Far.jpg")} style={styles.imagem2} /> */}
        
      
    </SafeAreaView>
  );
}


export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ffd5",
    alignItems: "flex-start",
    justifyContent: "flex-start",


  },

  titulo: {
    width: 394,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2, // Add this line to add a border
    borderColor: "black", // Add this line to set the border color
  },

  botao: {
    flexDirection: "row",
    gap: 3,
    marginTop: 10,
    marginLeft: 5,
  },

  texto: {
    fontSize: 20,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },

  lista: {
    fontSize: 20,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },

  imagens: {
    flexDirection: "row",
    gap: 3,

  },

  imagem: {
    width: 70,
    height: 70,
    borderRadius: 200,
    borderWidth: 2, // Add this line to add a border
    borderColor: "black", // Add this line to set the border color
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 5,

  },

  imagem2: {
    width: 385,
    height: 180,
    borderRadius: 20,
    borderWidth: 2, // Add this line to add a border
    borderColor: "#133350", // Add this line to set the border color
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 5,


  },

});
