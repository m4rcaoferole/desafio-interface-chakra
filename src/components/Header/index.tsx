import { Flex, Grid, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
         h='100%'
         mx='auto'
         w='100%'
         maxW='1160px'
         templateColumns='repeat(3, fr)'
         justifyContent='center'
         alignItems='center'
      >
         <Image 
            w={['80px', '180px']}
            src="/Logo.svg"
            alt="Logo World Trip"
            justifySelf='center'
            gridColumn="2"
         />
      </Grid>
    </Flex>
  );
}
