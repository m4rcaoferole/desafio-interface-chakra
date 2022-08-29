import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["160px", "250px", "250px", "335px"]}
      bgImage="url('/Banner.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "30"]}
      >
        <Flex direction='column'>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continentes,
            <br />
            Infinitas Possibilidades
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.7rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image
          w={["300px", "300px", "300px", "440px"]}
          display={["none", "none", "block"]}
          src="/Airplane.svg"
          alt="Avião Amarelo nas nuvens"
          transform="translatey(45px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
