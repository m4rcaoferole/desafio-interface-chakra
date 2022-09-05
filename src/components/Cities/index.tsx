import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <div>
      <Heading fontSize={["2xl","4xl"]} fontWeight="500" mb="10">Cidades +100</Heading>
      <Grid
        templateColumns={["1fr","1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr"]}
        gap={["20px","45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px","0"]}
      >
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
      </Grid>
    </div>
  );
}
