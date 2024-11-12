import AboutSection from "../../components/aboutSection";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import Services from "../../components/services";

const Home = () => {
  return (
    <main>
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutSection></AboutSection>
        <Services></Services>
    </main>
  )
};

export default Home;
