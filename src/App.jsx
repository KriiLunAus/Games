import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import FlipTheCoinPage from './pages/flipTheCoinPage/flipTheCoinPage';
import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flipTheCoin" element={<FlipTheCoinPage />} />
      </Routes>
    </>
  );
}

export default App;
