import { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './about/about';
import Achtivity from './achtivity/achtivity';
import LoaderSpinner from './components/loader/loader';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Header from './header/header';
import HomeSection from './homeSection/homeSection';
import Project from './project/project';
import Service from './service/service';
import Portfolio from './portfolio/portfolio';


function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true)
    }, 1500)
  }, [])
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienseRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      {
        !isLoading ? <LoaderSpinner />
          :
          <>
            <Header
              homeRef={homeRef}
              aboutRef={aboutRef}
              experienseRef={experienseRef}
              contactRef={contactRef}
            />
            <HomeSection
              homeRef={homeRef}
              experienseRef={experienseRef}
            />
            <About
              aboutRef={aboutRef}
            />
            <Service />
            <Achtivity
              experienseRef={experienseRef}
            />
            <Project />
            <Portfolio />
            <Contact
              contactRef={contactRef}
            />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
