import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {
  WSChatPage,
} from './pages';

function App() {
  return(
    <>
      <BrowserRouter>
          <Route exact path="/" component={WSChatPage}/>
      </BrowserRouter>
    </>
  )
}

export default App;