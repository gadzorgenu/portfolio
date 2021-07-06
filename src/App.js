import { Box } from "@chakra-ui/react";
import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Box bg='black' h='100vh'>
    <Navbar/>
    <About />
    <Footer />
    </Box>
  );
}

export default App;
