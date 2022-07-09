import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ChakraProvider, theme } from '@chakra-ui/react'

import URLRoutes from  './components/URLRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ChakraProvider theme={theme}>
      <URLRoutes/>
    </ChakraProvider>
  </div>
);

