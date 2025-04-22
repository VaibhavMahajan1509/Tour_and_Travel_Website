import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home.jsx";
import SearchBar from './Components/SearchBar.jsx';
import Feature from './Components/Feature.jsx';
import Destination from './Components/Destination'; 
import PopularActivities from "./Components/PopularActivities.jsx";
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <Home></Home>
      <SearchBar />
      <Feature />
      <Destination />
      <PopularActivities></PopularActivities>
      <Footer></Footer>
    </>
  );
}

export default App;
