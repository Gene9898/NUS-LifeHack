import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Members from './components/Members';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
    }
  />
  </Route>
  <Route path="/members" element = {<Members/>}/>
  </Routes>
</BrowserRouter>
);
