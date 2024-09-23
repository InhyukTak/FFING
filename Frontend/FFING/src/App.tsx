import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from './pages/GamePage';
import BattlePage from './pages/BattlePage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
// 이규석 테스트 페이지
import LGSTestPage from './pages/LGSTestPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/main" element={<MainPage />} />
        {/* 게임 페이지(원래 /game) */}
        <Route path="/" element={<GamePage />} />
        {/* 배틀 페이지 */}
        <Route path="/battle" element={<BattlePage />} />
        {/* 404 페이지 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router> 
  );
};

export default App;
