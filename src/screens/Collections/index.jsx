import { VStack, Text, ScrollView, FlatList, HStack } from "native-base";
import SecondaryFlatList from "../../components/secondary-flatList";
import { useState } from "react";

function Collections() {
  const [categories, setCategories] = useState(["action", "horror"]);
  const [filteredBook, setFilteredBook] = useState([]);
  const [books, setBooks] = useState([
    {
      id: "1",
      category: "action",
      cover: require("../../assets/images/books/the-wager-a-tale-of-shipwreck.png"),
      isFavorite: true,
    },
    {
      id: "2",
      category: "horror",
      cover: require("../../assets/images/books/killers-of-the-flower-moon.png"),
      isFavorite: true,
    },
    {
      id: "3",
      category: "romance",
      cover: require("../../assets/images/books/jaws-a-novel.png"),
      isFavorite: true,
    },
    {
      id: "4",
      category: "romance",
      cover: require("../../assets/images/books/the-invisible-man.png"),
      isFavorite: true,
    },
    {
      id: "5",
      category: "action",
      cover: require("../../assets/images/books/the-wager-a-tale-of-shipwreck.png"),
      isFavorite: true,
    },
    {
      id: "6",
      category: "horror",
      cover: require("../../assets/images/books/killers-of-the-flower-moon.png"),
      isFavorite: true,
    },
    {
      id: "7",
      category: "horror",
      cover: require("../../assets/images/books/jaws-a-novel.png"),
      isFavorite: true,
    },
    {
      id: "8",
      category: "fantasy",
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

  function handleFilterBooks(category) {
    const filterBooks = books.filter((book) => book.category === category);
    setFilteredBook(filterBooks);
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
          {categories.map((category) => (
            <FlatList
              borderBottomColor={"gray.100"}
              borderBottomWidth={2}
              pb={2}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={books.filter((book) => book.category === category)}
              renderItem={({ item }) => (
                <HStack request={item}>
                  <SecondaryFlatList
                    title={item}
                    books={filteredBook[item]}
                    onRequest={() => handleFilterBooks(item)}
                  />
                  <Text color={"gray.700"}>{item}</Text>
                </HStack>
              )}
            />
          ))}
          {/* <FlatList
            borderBottomColor={"gray.100"}
            borderBottomWidth={2}
            pb={2}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categories}
            renderItem={({ item }) => (
              <HStack request={item}>
                <SecondaryFlatList
                  title={item}
                  books={filteredBook[item]}
                  onRequest={() => handleFilterBooks(item)}
                />
                <Text color={"gray.700"}>{item}</Text>
              </HStack>
            )}
          /> */}
        </VStack>
      </VStack>
    </ScrollView>
  );
}

export default Collections;
