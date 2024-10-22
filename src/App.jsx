import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import RockPaperScisorsPage from './pages/RockPaperScisorsPage/RockPaperScisors.jsx';
import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import CoinPage from './pages/CoinPage/CoinPage.jsx';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coinGame" element={<CoinPage />} />
        <Route path="/rockParerScisors" element={<RockPaperScisorsPage />} />
      </Routes>
    </>
  );
}

export default App;
