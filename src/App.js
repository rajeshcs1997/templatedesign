import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Plants from './components/Plants/Plants'
import About from './components/About/About'
import Whyus from './components/Whyus/Whyus'
import Contact from './components/Contact/Contact'
import Customers from './components/Customers/Customers'
import Footer from './components/Footer/Footer'

const  App = () => {
  return (
    <div className="App">
      <Header />
      <Plants />
      <About />
      <Whyus />
      <Contact />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
