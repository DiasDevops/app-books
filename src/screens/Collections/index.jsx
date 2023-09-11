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
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Collections() {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "First Test",
      author: "",
      synopsis: "",
      category: "Ação",
      cover: require("../../assets/images/books/first-test.png"),
      isFavorite: true,
    },
    {
      id: "2",
      title: "Naomis Room",
      author: "",
      synopsis: "",
      category: "Terror",
      cover: require("../../assets/images/books/naomis-room.png"),
      isFavorite: true,
    },
    {
      id: "3",
      title: "A Promise Of Fire",
      author: "",
      synopsis: "",
      category: "Romance",
      cover: require("../../assets/images/books/a-promise-of-fire.png"),
      isFavorite: true,
    },
    {
      id: "4",
      title: "Daughter Of No Worlds",
      author: "",
      synopsis: "",
      category: "Romance",
      cover: require("../../assets/images/books/daughter-of-no-worlds.png"),
      isFavorite: true,
    },
    {
      id: "5",
      title: "The Cursed And Desired",
      author: "",
      synopsis: "",
      category: "Romance",
      cover: require("../../assets/images/books/the-cursed-and-desired.png"),
      isFavorite: true,
    },
    {
      id: "6",
      title: "The Invisible Man",
      author: "",
      synopsis: "",
      category: "Romance",
      cover: require("../../assets/images/books/the-invisible-man.png"),
      isFavorite: true,
    },
    {
      id: "7",
      title: "The Wager A Tale Of Shipwreck",
      author: "",
      synopsis: "",
      category: "Ação",
      cover: require("../../assets/images/books/the-wager-a-tale-of-shipwreck.png"),
      isFavorite: true,
    },
    {
      id: "8",
      title: "Tales Of Horror",
      author: "",
      synopsis: "",
      category: "Terror",
      cover: require("../../assets/images/books/tales-of-horror.png"),
      isFavorite: true,
    },
    {
      id: "9",
      title: "Ghost Eaters",
      author: "",
      synopsis: "",
      category: "Terror",
      cover: require("../../assets/images/books/ghost-eaters.png"),
      isFavorite: true,
    },
    {
      id: "10",
      title: "Solo Leveling",
      author: "Chugong",
      synopsis:
        "Um fraco caçador de E-Rank, Sung Jin Woo. Ele quase encontra seu fim em uma masmorra, mas havia um lado bom no momento mais difícil!",
      category: "Manhwa",
      cover: require("../../assets/images/books/solo-leveling.png"),
      isFavorite: true,
    },
    {
      id: "11",
      title: "The Beginning After The End ",
      author: "TurtleMe (Brandon Lee)",
      synopsis:
        "Segue a vida do falecido Rei Grey após sua morte prematura e misteriosa.",
      category: "Manhwa",
      cover: require("../../assets/images/books/the-beginning-after-the-end.png"),
      isFavorite: true,
    },
    {
      id: "12",
      title: "The Novel’s Extra",
      author: "Jee Gab Song (지갑송)",
      synopsis:
        "Um mundo que ele mesmo criou e uma história que escreveu, mas nunca terminou. Ele se tornou o figurante de seu romance, um personagem sem importância para a história.",
      category: "Manhwa",
      cover: require("../../assets/images/books/the-novels-extra.png"),
      isFavorite: true,
    },
    {
      id: "13",
      title: "The World After the End",
      author: "",
      synopsis:
        "Esta é uma história de um homem que se recusou a voltar ao passado quando todos os outros decidiram fazê-lo.",
      category: "Manhwa",
      cover: require("../../assets/images/books/the-world-after-the-end.png"),
      isFavorite: true,
    },
    {
      id: "14",
      title: "My Daughter Is the Final Boss",
      author: "Geulsseunya",
      synopsis:
        "Minha filha destruiu o mundo. No final da encruzilhada, morri desamparado. Quando abri os olhos novamente, vi minha filha de cinco anos na minha frente. Evite os cinco infortúnios de Seol-Ah Lee. (0/5) Chance dada mais uma vez. Se criada incorretamente, o mundo perecerá.",
      category: "Manhwa",
      cover: require("../../assets/images/books/my-daughter-is-the-final-boss.png"),
      isFavorite: true,
    },
    {
      id: "15",
      title: "Jack Mars Primary Threat",
      author: "",
      synopsis: "",
      category: "Ação",
      cover: require("../../assets/images/books/jack-mars-primary-threat.png"),
      isFavorite: true,
    },
    {
      id: "16",
      title: "Man Hunt",
      author: "",
      synopsis: "",
      category: "Ação",
      cover: require("../../assets/images/books/man-hunt.png"),
      isFavorite: true,
    },
  ]);

  const collectionsData = async (value) => {
    try {
      await AsyncStorage.setItem("@collectionsKey", JSON.stringify[]);
    } catch (e) {
      console.log("Error");
    }
  };

  useEffect(() => {
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
    listCategories.sort();
    setCategories(listCategories);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack px={4} pt={10} pb={20}>
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
