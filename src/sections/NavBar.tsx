"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  Drawer,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import { useState, type FC } from "react";

const Navbar: FC<{ links: {label: string, href: string}[] }> = ({
    links
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        position="fixed"
        top="20px"
        left="50%"
        transform="translateX(-50%)"
        width="100%"
        px={4}
        zIndex={1000}
      >
        <Container maxW="7xl">
          <Flex
            align="center"
            justify="space-between"
            px={6}
            py={3}
            border="1px solid"
            borderColor="whiteAlpha.200"
            bg="rgba(255,255,255,0.08)"
            backdropFilter="blur(16px)"
            borderRadius="full"
            boxShadow="lg"
          >
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="white"
              letterSpacing="wide"
            >
              Porte Folio
            </Text>

            {/* Desktop */}
            <HStack gap={6} display={{ base: "none", md: "flex" }}>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  color="whiteAlpha.800"
                  _hover={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  transition="0.2s"
                >
                  {link.label}
                </Link>
              ))}
            </HStack>

            {/* Mobile */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open Menu"
              variant="ghost"
              color="white"
              onClick={() => setOpen(true)}
            >
              <LuMenu />
            </IconButton>
          </Flex>
        </Container>
      </Box>

      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="gray.900" color="white">
              <Drawer.Header>
                <Flex justify="space-between" align="center">
                  <Text fontWeight="bold">Menu</Text>
                  <CloseButton onClick={() => setOpen(false)} />
                </Flex>
              </Drawer.Header>

              <Drawer.Body>
                <VStack align="start" gap={6} mt={6}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      fontSize="lg"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </VStack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}

export default Navbar;
