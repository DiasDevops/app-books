import React, { useEffect, useState } from "react";
import { VStack, Text, Image, Button, Icon, HStack } from "native-base";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import axios from "axios";

const BookDetails = () => {
  const route = useRoute();
  const { book } = route.params;
  const [favorite, setFavorite] = useState(book.isFavorite);

  const loadFavotires = async () => {
    axios
      .get(`http://10.0.2.2:3004/books/${book.id}`)
      .then((response) => {
        setFavorite(response.data.isFavorite);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
  };

  const handleFavorite = async () => {
    const updateBook = !favorite;
    setFavorite(updateBook);

    try {
      await axios.patch(`http://10.0.2.2:3004/books/${book.id}`, {
        isFavorite: updateBook,
      });
      setFavorite(!favorite);
    } catch (error) {
      console.error("Erro ao atualizar favorito:", error);
    }
  };

  useEffect(() => {
    loadFavotires();
  }, []);

  // const handleFavorite = async () => {
  //   const updateBook = !favorite;
  //   setFavorite(updateBook);
  //   book.isFavorite = updateBook;
  // };

  return (
    <>
      <VStack safeArea>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Detalhes
        </Text>
      </VStack>
      <VStack justifyContent={"center"} flex={1}>
        <VStack alignItems={"center"}>
          <Image
            source={{ uri: book.cover }}
            w={175}
            h={275}
            mb={4}
            roundedRight={8}
            resizeMode="cover"
          />
          <HStack alignItems={"center"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {book.title}
            </Text>

            <TouchableOpacity onPress={() => handleFavorite(book.id)}>
              <Icon
                as={
                  <Ionicons name={favorite ? "bookmark" : "bookmark-outline"} />
                }
                size={6}
                color={favorite ? "secondary.700" : "gray.300"}
              />
            </TouchableOpacity>
          </HStack>

          <Text fontSize={"md"}>
            Autor: {book.author != "" ? book.author : "Desconhecido"}
          </Text>
          <Text fontSize={"md"} textAlign={"center"}>
            {book.category}
          </Text>
          <Text fontSize={"md"} textAlign={"center"}>
            {book.synopsis != ""
              ? book.synopsis
              : "Nenhuma Informação disponível"}
          </Text>
          <Button>Leitura</Button>
        </VStack>
      </VStack>
    </>
  );
};

export default BookDetails;
