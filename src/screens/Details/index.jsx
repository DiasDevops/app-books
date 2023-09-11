import React, { useState } from "react";
import { VStack, Text, Image, Button } from "native-base";

const BookDetails = ({ route }) => {
  //   const { titulo, autor, capa, sinopse } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      {/* <Image source={{ uri: capa }} w={200} h={300} mb={16} resizeMode="cover"/> */}
      <Text fontSize={"md"} fontWeight={"bold"} mb={8}>
        AAAAA
      </Text>
      <Text fontSize={"sm"} mb={8}>
        Autor: AAAAAA
      </Text>
      <Text font={"sm"} textAlign={"center"} py={"16"} pb={16}>
        AAAA
      </Text>
      <Button
        title={isFavorite ? "Desfavoritar" : "Favoritar"}
        onPress={toggleFavorite}
      />
    </VStack>
  );
};

export default BookDetails;
