import {
  VStack,
  Text,
  ScrollView,
  FlatList,
  Icon,
  Image,
  HStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SecondaryFlatList from "../../components/Secondary-flatList";
import { useState } from "react";

function Collections() {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([
    {
      id: "1",
      category: "Ação",
      cover: require("../../assets/images/books/the-wager-a-tale-of-shipwreck.png"),
      isFavorite: true,
    },
    {
      id: "2",
      category: "Terror",
      cover: require("../../assets/images/books/killers-of-the-flower-moon.png"),
      isFavorite: true,
    },
    {
      id: "3",
      category: "Romance",
      cover: require("../../assets/images/books/jaws-a-novel.png"),
      isFavorite: true,
    },
    {
      id: "4",
      category: "Romance",
      cover: require("../../assets/images/books/the-invisible-man.png"),
      isFavorite: true,
    },
    {
      id: "5",
      category: "Ação",
      cover: require("../../assets/images/books/the-wager-a-tale-of-shipwreck.png"),
      isFavorite: true,
    },
    {
      id: "6",
      category: "Terror",
      cover: require("../../assets/images/books/killers-of-the-flower-moon.png"),
      isFavorite: true,
    },
    {
      id: "7",
      category: "Terror",
      cover: require("../../assets/images/books/jaws-a-novel.png"),
      isFavorite: true,
    },
    {
      id: "8",
      category: "Fantasia",
      cover: require("../../assets/images/books/the-invisible-man.png"),
      isFavorite: true,
    },
  ]);

  useState(() => {
    handleReduceCategories();
  }, []);

  function handleReduceCategories() {
    const listCategories = Array.from(
      books.reduce((categories, book) => {
        if (book.category) {
          categories.add(book.category);
        }
        return categories;
      }, new Set())
    );
    setCategories(listCategories);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack px={4} pt={12}>
        <VStack>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Minhas Coleções
          </Text>
          <Text pt={2} fontSize={"md"} color={"gray.400"} pb={6}>
            Salve seus livros favoritos. Apenas você pode ver esta coleção
          </Text>
          <SecondaryFlatList title={"Meus Favorios"} />
          {categories.map((category) => {
            const data = books.filter((book) => book.category === category);

            return (
              <>
                <HStack justifyContent={"space-between"}>
                  <VStack mt={2} mb={4}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                      {category}
                    </Text>
                    <Text color={"gray.400"}>
                      {data.length} {data.length === 1 ? "livro" : "livros"}
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
                  keyExtractor={(book) => book.id}
                  data={data}
                  renderItem={({ item }) => (
                    <VStack mr={2}>
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
              </>
            );
          })}
        </VStack>
      </VStack>
    </ScrollView>
  );
}

export default Collections;
