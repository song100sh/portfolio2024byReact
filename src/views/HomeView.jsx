import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomeView() {
  return(<>
  <Skip/>
  <Header/>
  <Main>
    <Intro/>
    <Skill/>
    <Site/>
    <Portfolio/>
    <Contact/>
  </Main>
  <Footer/>
  </>);
}

export default HomeView;