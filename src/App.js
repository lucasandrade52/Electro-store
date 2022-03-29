import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContainer from './components/MainContainer';
import Container from './components/MainContainer/Container';
import GallerieProducts from './components/GallerieProducts';
import SliderCard from './components/SliderCard'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <MainContainer className="container__main">
        <Container />
      </MainContainer>
      <MainContainer className="container__products">
        <GallerieProducts title="Novos produtos" />
      </MainContainer>
      <Banner />
      <MainContainer >
        <GallerieProducts title="Mais vendidos" />
      </MainContainer>
      <MainContainer className="container__slider">
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </MainContainer>
    </>
  );
}
export default App;