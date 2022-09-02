import { Flex, Heading } from "@chakra-ui/react";

export default function ContainerBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "35"]}
      pt={["0", "0", "70"]}
      bgImage="url(/europetorre.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        mt={["0","0","200px"]}
        ml={["0","0","100px"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>
    </Flex>
  );
}
