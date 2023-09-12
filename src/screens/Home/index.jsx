import React, { useEffect, useState } from "react";
import { VStack, Text, Image, FlatList, ScrollView } from "native-base";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import BookCard from "../../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);

  function textLimit(text, limit) {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  }

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

  // const renderItem = ({ item }) => (
  //   <VStack pr={4}>
  //     <TouchableOpacity
  //       onPress={() => navigation.navigate("details", { book: item })}
  //     >
  //       <Image
  //         request={item}
  //         alt={item.id}
  //         source={{
  //           uri: item.cover,
  //         }}
  //         bgColor={"gray.800"}
  //         roundedRight={6}
  //         w={"140"}
  //         height={"210"}
  //       />
  //     </TouchableOpacity>
  //     <Text fontSize={"md"} fontWeight={"bold"}>
  //       {" "}
  //       {item.title === ""
  //         ? textLimit("Titulo Indisponivel", 15)
  //         : textLimit(item.title, 15)}
  //     </Text>
  //     <Text>
  //       {" "}
  //       {item.author === ""
  //         ? textLimit("Desconhecido", 18)
  //         : textLimit(item.author, 18)}
  //     </Text>
  //   </VStack>
  // );

  return (
    <VStack safeArea px={2}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text fontSize={"4xl"} fontWeight={"bold"} pb={6}>
          Populares
        </Text>
        <FlatList
          borderBottomColor={"gray.100"}
          borderBottomWidth={2}
          pb={2}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={books}
          renderItem={({ item }) => <BookCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text fontSize={"4xl"} fontWeight={"bold"} pb={6}>
          Populares
        </Text>
        <FlatList
          numColumns={3}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-between",
          }}
          borderBottomColor={"gray.100"}
          borderBottomWidth={2}
          pb={2}
          showsVerticalScrollIndicator={false}
          data={books}
          renderItem={({ item }) => (
            <BookCard
              item={item}
              sizeX={"115"}
              sizeY={"160"}
              titleLimit={10}
              authorLimit={12}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </VStack>
  );
}

export default Home;
