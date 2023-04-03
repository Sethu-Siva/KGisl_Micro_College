import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HomePage } from './Components/Home/Home';
import { NavigationBar } from './Components/Nav Bar/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';

function App()
{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar/>}/>
          <Route path='/Sethu-Siva' element={[<NavigationBar/>,<HomePage/>,<About/>,<Footer/>]}/>
          <Route path='/Sethu-Siva/About' element={[<NavigationBar/>,<About/>,<Footer/>]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;