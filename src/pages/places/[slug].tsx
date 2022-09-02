import { Flex } from "@chakra-ui/react";
import Cities from "../../components/Cities";
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
        <Cities />
      </Flex>
    </Flex>
  );
}
