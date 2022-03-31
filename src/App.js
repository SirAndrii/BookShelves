import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/main';
import SearchPage from './pages/search/search';
import ContextProvider from './store/context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
