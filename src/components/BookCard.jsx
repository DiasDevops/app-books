import React from "react";
import { VStack, Text, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BookCard({ item, sizeY, sizeX, authorLimit, titleLimit }) {
  const navigation = useNavigation();
  function textLimit(text, limit) {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  }

  return (
    <VStack pr={4}>
      <TouchableOpacity
        onPress={() => navigation.navigate("details", { book: item })}
      >
        <Image
          request={item}
          alt={item.id}
          source={{
            uri: item.cover,
          }}
          bgColor={"gray.800"}
          roundedRight={6}
          w={sizeX || "140"}
          height={sizeY || "210"}
        />
      </TouchableOpacity>
      <Text fontSize={"md"} fontWeight={"bold"}>
        {" "}
        {item.title === ""
          ? textLimit("Titulo Indisponivel", titleLimit || 15)
          : textLimit(item.title, titleLimit || 15)}
      </Text>
      <Text>
        {" "}
        {item.author === ""
          ? textLimit("Desconhecido", authorLimit || 18)
          : textLimit(item.author, authorLimit || 18)}
      </Text>
    </VStack>
  );
}

export default BookCard;
