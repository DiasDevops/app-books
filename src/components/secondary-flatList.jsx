import { VStack, HStack, Text, FlatList, Icon, Image } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

function SecondaryFlatList({ title, books, ...rest }) {
  const [Favorites, setFavorites] = useState([]);

  useState(() => {
    handleListBooks();
  }, []);

  function handleListBooks() {
    const favoriteBooks = books.filter((book) => book.isFavorite);
    setFavorites(favoriteBooks);
  }
  function handleOpenDetails(bookId) {
    navigation.navigate("details", { bookId });
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
        data={Favorites}
        renderItem={({ item }) => (
          <VStack pr={2}>
            <Image
              request={item}
              h={"125"}
              w={"85"}
              roundedRight={6}
              source={item.cover}
              onPress={() => handleOpenDetails(item.id)}
              alt={item.id}
            />
          </VStack>
        )}
      />
    </VStack>
  );
}

export default SecondaryFlatList;
