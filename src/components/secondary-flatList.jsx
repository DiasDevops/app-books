import { VStack, HStack, Text, FlatList, Icon, Image } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

function SecondaryFlatList({ title, ...rest }) {
  const [Favorites, setFavorites] = useState([]);
  const [books, setBooks] = useState([
    {
      id: "1",
      cover: require("../assets/images/books/the-wager-a-tale-of-shipwreck.png"),
      isFavorite: true,
    },
    {
      id: "2",
      cover: require("../assets/images/books/killers-of-the-flower-moon.png"),
      isFavorite: true,
    },
    {
      id: "3",
      cover: require("../assets/images/books/jaws-a-novel.png"),
      isFavorite: true,
    },
    {
      id: "4",
      cover: require("../assets/images/books/the-invisible-man.png"),
      isFavorite: true,
    },
    {
      id: "5",
      cover: require("../assets/images/books/the-wager-a-tale-of-shipwreck.png"),
      isFavorite: true,
    },
    {
      id: "6",
      cover: require("../assets/images/books/killers-of-the-flower-moon.png"),
      isFavorite: true,
    },
    {
      id: "7",
      cover: require("../assets/images/books/jaws-a-novel.png"),
      isFavorite: true,
    },
    {
      id: "8",
      cover: require("../assets/images/books/the-invisible-man.png"),
      isFavorite: true,
    },
  ]);
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
        <VStack>
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
          <VStack pt={4} pr={2}>
            <Image
              request={item}
              h={"125"}
              w={"85"}
              roundedRight={6}
              source={item.cover}
              onPress={() => handleOpenDetails(item.id)}
            />
          </VStack>
        )}
      />
    </VStack>
  );
}

export default SecondaryFlatList;
