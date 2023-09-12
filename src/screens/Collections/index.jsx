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
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";

function Collections() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleListBooks();
  }, []);

  function handleListBooks() {
    axios
      .get("http://10.0.2.2:3004/books")
      .then((response) => {
        const favoriteBooks = response.data.filter((book) => book.isFavorite);
        setBooks(favoriteBooks);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
  }

  useFocusEffect(
    useCallback(() => {
      handleReduceCategories();
    }, [])
  );
  function handleReduceCategories() {
    const listCategories = Array.from(
      books.reduce((categories, book) => {
        if (book.category) {
          categories.add(book.category);
        }
        return categories;
      }, new Set())
    );
    listCategories.sort();
    setCategories(listCategories);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack safeArea px={4} pb={20}>
        <VStack>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Minhas Coleções
          </Text>
          <Text pt={2} fontSize={"md"} color={"gray.400"} pb={6}>
            Salve seus livros favoritos. Apenas você pode ver esta coleção
          </Text>
          <SecondaryFlatList title={"Meus Favorios"} books={books} />

          {categories.map((category) => {
            const data = books.filter((book) => book.category === category);

            return (
              <VStack key={category}>
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
                  key={category}
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
                        source={{ uri: item.cover }}
                        onPress={() => navigation.navigate("details")}
                        alt={item.id}
                      />
                    </VStack>
                  )}
                />
              </VStack>
            );
          })}
        </VStack>
      </VStack>
    </ScrollView>
  );
}

export default Collections;
