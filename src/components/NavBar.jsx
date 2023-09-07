import { Icon, HStack, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

function NavBar() {
  return (
    <VStack position={"absolute"} bottom={0} left={0} right={0}>
      <HStack
        justifyContent={"space-between"}
        borderColor={"gray.100"}
        borderWidth={1}
        rounded={12}
        m={2}
        p={2}
        bgColor={"white"}
      >
        <Icon
          as={<Ionicons name="home-outline" />}
          size={36}
          color="gray.300"
          m={1}
        />
        <Icon
          as={<Ionicons name="search-outline" />}
          size={36}
          color="gray.300"
          m={1}
        />
        <Icon
          as={<Ionicons name="library-outline" />}
          size={36}
          color="gray.300"
          m={1}
        />
        <Icon
          as={<Ionicons name="bookmark-outline" />}
          size={36}
          color="gray.300"
          m={1}
        />
        <Icon
          as={<Ionicons name="settings-outline" />}
          size={36}
          color="gray.300"
          m={1}
        />
      </HStack>
    </VStack>
  );
}

export default NavBar;
