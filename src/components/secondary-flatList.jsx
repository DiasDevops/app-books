import { VStack, HStack, Text, FlatList, Icon, Image } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import axios from "axios";

function SecondaryFlatList({ title, books, ...rest }) {
  const navigation = useNavigation();
  const [Favorites, setFavorites] = useState([]);

  function textLimit(text, limit) {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  }

  return (
    <VStack>
      <HStack justifyContent={"space-between"}>
        <VStack mb={4}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text color={"gray.400"}>
            {Favorites.length} {Favorites.length === 1 ? "livro" : "livros"}
          </Text>
        </VStack>
        <Icon
          as={<MaterialIcons name="more-vert" />}
          size={6}
          color="gray.300"
          alignSelf={"center"}
        />
      </HStack>

      <FlatList
        borderBottomColor={"gray.100"}
        borderBottomWidth={2}
        pb={2}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={books}
        renderItem={({ item }) => (
          <VStack pr={2} flex={1}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("details", { book: item })}
            >
              {/* {item.cover !== null ? (
                <Icon
                  as={<MaterialIcons name="image-not-supported" />}
                  size={6}
                  color="gray.300"
                  alignSelf={"center"}
                />
              ) : (
                <Image
                  request={item}
                  h={"125"}
                  w={"85"}
                  roundedRight={6}
                  source={{ uri: item.cover }}
                  alt={item.id}
                /> */}
              <Image
                request={item}
                h={"150"}
                // bgColor={"gray.800"}
                w={"110"}
                roundedRight={6}
                source={{ uri: item.cover }}
                alt={item.id}
              />
            </TouchableWithoutFeedback>
            {/* {console.log(item)} */}
            <Text fontSize={"md"} fontWeight={"bold"}>
              {" "}
              {item.title === ""
                ? textLimit("Titulo Indisponivel", 10)
                : textLimit(item.title, 10)}
            </Text>
            <Text>
              {" "}
              {item.author === ""
                ? textLimit("Desconhecido", 12)
                : textLimit(item.author, 12)}
            </Text>
          </VStack>
        )}
      />
    </VStack>
  );
}

export default SecondaryFlatList;
