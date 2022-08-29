import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CharacteristicProps {
  icon: string;
  text: string;
}

export default function Characteristic({ icon, text }: CharacteristicProps) {
  const isModile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isModile ? <Image src={`/icons/${icon}.svg`} alt='Caracteristicas' w="85px" h="85px" mb="6"/>
        : <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
}
