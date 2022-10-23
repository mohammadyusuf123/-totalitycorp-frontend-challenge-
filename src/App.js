import Navbar from'../src/components/Navbar'
import AppleTv from './components/AppleTv';
import Ipad from './components/Ipad';
import IpadCombo from './components/IpadCombo';
import Card from './components/Card';
import Carousel from './components/Carousel/Carousel';
import{data} from'./components/Data'
import Footer from './components/Footer';
function App() {
  return (
    <div>
     <Navbar/>
     <Ipad/>
     <IpadCombo/>
     <AppleTv/>
     <Card/>
     <Carousel images={data}/>
     <Footer/>
    </div>
  );
}

export default App;
