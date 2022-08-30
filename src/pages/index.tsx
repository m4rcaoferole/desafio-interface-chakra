import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Characteristics from "../components/Characteristics";
import Divider from "../components/Divider";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Flex direction="column">
        <Header />
        <Banner />
        <Characteristics />
        <Divider />

        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "15"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Flex>
    </div>
  );
}
