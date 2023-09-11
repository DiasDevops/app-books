import React, { useEffect, useState } from "react";
import { VStack, Text } from "native-base";
import axios from "axios";

export function Home() {
  const [books, setBooks] = useState([]);
  const [state, setstate] = useState([]);
  // const API_KEY = "AIzaSyDsv8iIxHHeJLKc_AVHe-_BeDpkrFR16oM";
  // const API_URL = "http://localhost:3004/books";

  useEffect(() => {
    axios
      .get("http://10.0.2.2:3004/books")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <VStack safeArea bgColor={"gray.800"} flex={1}>
      <Text>TESTANDO</Text>
    </VStack>
  );
}
