import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Body from './Component/Body/Body';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Chat from './Component/Chat/Chat';

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      {/* <Body /> */}
      {/* <Footer/> */}
      <Routes>
        <Route path='/'element={<Body/>}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
