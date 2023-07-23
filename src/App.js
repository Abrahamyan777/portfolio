import './App.css';
import About from './about/about';
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
      <Footer />

    </div>
  );
}

export default App;
