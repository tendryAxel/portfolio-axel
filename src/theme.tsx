import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e3f2ff" },
          100: { value: "#b3daff" },
          200: { value: "#80c2ff" },
          300: { value: "#4da9ff" },
          400: { value: "#1a91ff" },
          500: { value: "#0077e6" },
          600: { value: "#005db4" },
          700: { value: "#004282" },
          800: { value: "#002851" },
          900: { value: "#001020" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)