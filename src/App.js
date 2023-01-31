import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
// import Footer from './components/Footer';
import BasicCard from "./components/Card/Mycard";
import CardSlider from "./components/Card/CardSlider";
import Hover from "./components/Team/Hover";





function App() { 
  return (
    <div className="App">
      {/* <BasicCard/>  */}
      <Hover/>
      <CardSlider/>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
