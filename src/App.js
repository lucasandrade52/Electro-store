import Header from './components/Header'
import Navigation from './components/Navigation'
import Wrapper from './components/Common/Wrapper';
import CampaingCard from './components/CampaingCard';
import GallerieProducts from './components/GallerieProducts';
import Banner from './components/Banner'
import SliderCard from './components/SliderCard'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Wrapper className="container__main">
        <CampaingCard />
      </Wrapper>
      <GallerieProducts title="Novos produtos" />
      <Banner />
      <Wrapper >
        <GallerieProducts title="Mais vendidos" />
      </Wrapper>
      <Wrapper className="container__slider">
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
}
export default App;