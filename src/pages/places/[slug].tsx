import { Flex } from "@chakra-ui/react";
import ContainerBanner from "../../components/ContainerBanner";
import Header from "../../components/Header";

export default function Places() {
  return (
    <Flex direction="column">
      <Header />
      <ContainerBanner />
    </Flex>
  );
}
