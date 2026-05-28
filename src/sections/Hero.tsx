import { Box, Heading, Text, Button, Stack, Span } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <Stack gap={6} textAlign="center">

        <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05">
            <Span display="block" fontWeight="extrabold" letterSpacing="-1px">
                RAKOTONIRINA
            </Span>

            <Span display="block" fontStyle="italic" fontWeight="medium">
                Tendriniaina <Span color="brand.400">Axel</Span>
            </Span>
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">
          Backend Developer • Java • Python • Spring boot
        </Text>

        <Stack direction="row" gap={4} justify="center">
          <Button colorScheme="blue" size="lg">
            Projects
          </Button>
          <Button variant="outline" size="lg">
            Contact
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Hero;
