import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import FlipTheCoinPage from './pages/FlipTheCoinPage/FlipTheCoinPage';
import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import RockPaperScisorsPage from './pages/RockPaperScisorsPage/RockPaperScisors';

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
