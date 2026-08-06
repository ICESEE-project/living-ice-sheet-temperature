import { createRoot } from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { loadCryoStackAccount } from "./cryostackAccount";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={defaultSystem}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </ChakraProvider>,
);

// Load the shared CryoStack account widget.
loadCryoStackAccount();