import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          50
        </Heading>
        <Text fontSize={["ml", "xl"]} fontWeight="500" color="gray.700">
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          60
        </Heading>
        <Text fontSize={["ml", "xl"]} fontWeight="500" color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          27
        </Heading>
        <Text fontSize={["ml", "xl"]} fontWeight="500" color="gray.700">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon as={RiInformationLine} cursor="pointer" ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.50" color="yellow.600" >
              <PopoverArrow bg="gray.50" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Brasil, Japão, Suéçia, Finlândia, França...
              </PopoverBody>
            </PopoverContent>
          </Popover>
          
        </Text>
      </Flex>
    </Flex>
  );
}
