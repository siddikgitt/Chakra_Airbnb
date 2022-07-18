import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  useBreakpointValue
} from "@chakra-ui/react";

function StackExample() {
  const text = useBreakpointValue({
    base: "BASE",
    sm: "SMALL",
    md: "MEDIUM"
  });
  return (
    // xs - xsmall
    // sm - small
    // md - medium
    // lg - large
    // xl - xlarge
    // 2xl - xxlarge
    <>
      <Flex gap="1rem" my="1rem">
        <Heading>My App</Heading>
        <Spacer />
        <Button>Sign In </Button>
        <Button>Sign Up </Button>
      </Flex>
      <Stack
        sx={{ border: "1px solid black" }}
        direction={{ base: "column", md: "row" }}
        spacing="2rem"
      >
        <Button>{text}</Button>
        <Button>Hello</Button>
        <Button>World</Button>
      </Stack>
      <hr />
      <br />
      <hr />
      <Flex
        sx={{ border: "1px solid black" }}
        direction={{ base: "column", md: "row" }}
        gap="2rem"
      >
        <Button>{text}</Button>
        <Spacer />
        <Button>Hello</Button>
        <Spacer />
        <Button>World</Button>
      </Flex>
      <br />
      <Grid
        h="400px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
        <GridItem rowSpan={1} colSpan={5} bg="tomato" />
      </Grid>
      <br />
      <br />
      <br />
      <Grid
        templateAreas={`"header header header"
                  "nav main main"
                  "nav footer footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
      <br />
      <br />
    </>
  );
}

export default StackExample;
