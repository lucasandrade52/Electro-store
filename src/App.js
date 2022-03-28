import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContainer from './components/MainContainer';
import Container from './components/MainContainer/Container';
import GallerieProducts from './components/GallerieProducts';
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
        <GallerieProducts />
      </MainContainer>
      <Banner />
    </>
  );
}
export default App;