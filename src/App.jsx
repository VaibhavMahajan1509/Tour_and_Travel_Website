import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home.jsx";
import SearchBar from './Components/SearchBar.jsx';
import Feature from './Components/Feature.jsx';
import Destination from './Components/Destination'; 
import PopularActivities from "./Components/PopularActivities.jsx";
import TransparentSection from './Components/Transparent/TransparentSection.jsx';
import Photogallery from './Components/Photogallery/Photogallery.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <Home />
      <SearchBar />
      <Feature />
      <Destination />
      <PopularActivities />
      
      {/* Transparent Section with Background */}
      <TransparentSection />

      {/* Dummy Scrollable Content to enable scrolling */}
      <div style={{ height: '150vh', background: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center', paddingTop: '100px' }}>
          Scroll down to see the effect!
        </h2>
      </div>

      <Photogallery />
      <Footer />
    </>
  );
}

export default App;
