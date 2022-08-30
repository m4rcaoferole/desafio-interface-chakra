import { Grid, GridItem } from "@chakra-ui/react";
import Characteristic from "./Characteristic";
import Cocktail from '../../../public/Cocktail.svg'
import Surf from '../../../public/Surf.svg'
import Building from '../../../public/Building.svg'
import Earth from '../../../public/Earth.svg'

export default function Characteristics() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Characteristic icon="Cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Characteristic icon="Surf" text="praia" />
      </GridItem>
      <GridItem>
        <Characteristic icon="Building" text="moderno" />
      </GridItem>
      <GridItem>
        <Characteristic icon="Museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Characteristic icon="Earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
