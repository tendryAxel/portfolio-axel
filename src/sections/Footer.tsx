import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
<Box
  as="footer"
  w="full"
  mt={20}
  py={6}
  px={8}
  borderTopWidth="1px"
  backdropFilter="blur(10px)"
  bg="rgba(0,0,0,0.3)"
>
  <Flex
    maxW="6xl"
    mx="auto"
    direction={{ base: "column", md: "row" }}
    align="center"
    justify="space-between"
    gap={4}
  >
    <Text fontSize="sm" opacity={0.8}>
      © {new Date().getFullYear()} Rakotonirina Tendriniaina Axel
    </Text>

    <HStack gap={6} fontSize="sm">
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </HStack>
  </Flex>
</Box>
    )
}

export default Footer;
