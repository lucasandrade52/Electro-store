import Header from './components/Header'
import MainContainer from './components/MainContainer';
import Container from './components/MainContainer/Container';
import Navigation from './components/Navigation'
import GallerieProducts from './components/GallerieProducts';

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

    </>
  );
}
export default App;