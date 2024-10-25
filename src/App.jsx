import './css/App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RockPaperScisorsPage from './pages/RockPaperScisorsPage/RockPaperScisors.jsx';
import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import CoinPage from './pages/CoinPage/CoinPage.jsx';
import LogInPage from './pages/LogInPage/LogInPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = localStorage.getItem('username');
  return (
    <>
      {!isLoggedIn && !username && <LogInPage onLogin={setIsLoggedIn} />}

      {(isLoggedIn || username) && (
        <div>
          <HeaderComponent onLogOut={setIsLoggedIn} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coinGame" element={<CoinPage />} />
            <Route
              path="/rockParerScisors"
              element={<RockPaperScisorsPage />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      )}
    </>
  );
}
