import Header from './components/Header'
import MainContainer from './components/MainContainer';
import Container from './components/MainContainer/Container';
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <MainContainer className="container__main">
        <Container />
      </MainContainer>
    </>
  );
}
export default App;