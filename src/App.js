import './App.css';
import About from './about/about';
import Achtivity from './achtivity/achtivity';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Header from './header/header';
import HomeSection from './homeSection/homeSection';
import Project from './project/project';
import Service from './service/service';


function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <About />
      <Service />
      <Contact />
      <Project />

      <Achtivity />

      <Footer />
    </div>
  );
}

export default App;
