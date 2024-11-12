import AboutSection from "../../components/aboutSection";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import PopularFoods from "../../components/popularFoods";
import Services from "../../components/services";

const Home = () => {
  return (
    <main>
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutSection></AboutSection>
        <Services></Services>
        <PopularFoods></PopularFoods>
    </main>
  )
};

export default Home;
