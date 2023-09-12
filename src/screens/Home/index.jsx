import React, { useEffect, useState } from "react";
import { VStack, Text, Image, FlatList } from "native-base";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.0.2.2:3004/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <VStack style={{ marginBottom: 20 }}>
      <Image
        alt={item.id}
        source={require(`../assets/images/books/${item.cover}`)}
        style={{ width: 100, height: 150 }}
      />
      <Text>{item.title}</Text>
      <Text>Autor: {item.author !== "" ? item.author : "Desconhecido"}</Text>
      <Text>Categoria: {item.category}</Text>
      <Text>Sinopse: {item.synopsis}</Text>
    </VStack>
  );

  return (
    <VStack safeArea>
      <Text>Lista de Livros:</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Certifique-se de que o ID seja uma string
      />
    </VStack>
  );
}

export default Home;
