
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer/footer';
import Header from './Header/header';
import Mid from './Mid/mid';

function App() {
  return (

    <>
      <BrowserRouter>
        <Header></Header>
        <Mid></Mid>
        <Footer></Footer>    
      </BrowserRouter>
    </>
    

    
    
  );
}

export default App;
