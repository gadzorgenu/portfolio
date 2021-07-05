import React  from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import App from './App';

function RootApp ({ Component }) {
  return (
    <ChakraProvider>
       {/* <Component />  */}
      <App />
     </ChakraProvider>
  )
}

ReactDOM.render(
    <RootApp/>,
  document.getElementById('root')
);
