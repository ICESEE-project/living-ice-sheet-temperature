import { Box } from "@chakra-ui/react";
import AppNav from "./components/AppNav";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <AppNav />
      <Header />
      <Map />
    </Box>
  );
}

export default App;