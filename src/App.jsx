import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import FlipTheCoinPage from './pages/flipTheCoinPage/flipTheCoinPage';
import HomePage from './pages/HomePage/HomePage';
// import GameWindowComponent from './components/HeaderComponent/GameWindowComponent/GameWindowComponent';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flipTheCoin" element={<FlipTheCoinPage />} />
      </Routes>
    </>
  );
}

export default App;
