import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";

function App() {
  return (
    <Box >
    <Header />
    <About />
    <Resume/>
    <Footer />
    </Box>
  );
}

export default App;
