import { Provider } from "@/components/ui/provider";
import { Flex } from "@chakra-ui/react";
import Navbar from '@/sections/NavBar';
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";

export function App() {
  return (
    <Provider>
      <Navbar
        links={[
            { label: "Home", href: "#" },
          ]}
        />

      <Flex direction="column">
        <Hero />
        <Footer />
      </Flex>
    </Provider>
  );
}

export default App;
