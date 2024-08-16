import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Berita from "./pages/Berita";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Berita/>}/>
          <Route path="/not-found" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
