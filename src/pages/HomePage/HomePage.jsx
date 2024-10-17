// import css from './HomePage.module.css';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import HeroComponent from '../../components/HeroComponent/HeroComponent';
import GameList from '../../components/GameList/GameList';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <HeroComponent />
      <GameList />
      <Footer />
    </>
  );
}
