import './App.css';
import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Header from './header/header';
import HomeSection from './homeSection/homeSection';
import Service from './service/service';


function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <About />
      <Service />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
