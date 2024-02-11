import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Events from './Components/Events';
import GetInvolved from './Components/getInvolved'
import About from './Components/About';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Events/>
     <GetInvolved/>
     <Footer/>
    </div>
  );
}

export default App;
