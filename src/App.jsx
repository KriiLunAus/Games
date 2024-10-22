import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import RockPaperScisorsPage from './pages/RockPaperScisorsPage/RockPaperScisors.jsx';
import FlipTheCoinPage from './pages/FlipTheCoinPage/FlipTheCoin.jsx';
import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flipTheCoin" element={<FlipTheCoinPage />} />
        <Route path="/rockParerScisors" element={<RockPaperScisorsPage />} />
      </Routes>
    </>
  );
}

export default App;
