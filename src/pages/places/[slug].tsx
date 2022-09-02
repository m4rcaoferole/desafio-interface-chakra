import { Flex } from "@chakra-ui/react";
import ContainerBanner from "../../components/ContainerBanner";
import Content from "../../components/Content";
import Header from "../../components/Header";

export default function Places() {
  return (
    <Flex direction="column">
      <Header />
      <ContainerBanner />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
      </Flex>
    </Flex>
  );
}
