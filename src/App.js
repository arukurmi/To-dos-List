import './App.css';
import Header from "./Components/Header";
import {Footer} from "./Components/Footer";
import {ToDos} from "./Components/ToDos";

function App() {
  return (
    <>
      <Header title="AryanshKurmi" random={false}/>
      <ToDos/>
      <Footer/>
      

      
    </>
  ); 
}

export default App;
