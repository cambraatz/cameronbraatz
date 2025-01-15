import './App.css';
import Homepage from './views/Home';
import CompSci from './views/CompSci_0';
import CompSci1 from './views/CompSci_3';
import CompSci2 from './views/CompSci_1';
import CompSci3 from './views/CompSci_2';
import Landscape0 from './views/Landscape_0';
import Landscape1 from './views/Landscape_1';
import Landscape2 from './views/Landscape_2';
import Landscape3 from './views/Landscape_5';
import Landscape4 from './views/Landscape_6';
import Photo from './views/Photo_0';
import Hobby from './views/Hobby_0';
import Artwork from './views/Artwork_0';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Homepage/> } />
          <Route path="/compsci/0" element={ <CompSci/> } />
          <Route path="/compsci/1" element={ <CompSci1 /> } />
          <Route path="/compsci/2" element={ <CompSci2 /> } />
          <Route path="/compsci/3" element={ <CompSci3 /> } />
          <Route path="/landscape/0" element={ <Landscape0 /> } />
          <Route path="/landscape/1" element={ <Landscape1 /> } />
          <Route path="/landscape/2" element={ <Landscape2 /> } />
          <Route path="/landscape/3" element={ <Landscape3 /> } />
          <Route path="/landscape/4" element={ <Landscape4 /> } />
          <Route path="/photography" element={ <Photo/> } />
          <Route path="/hobbies" element={ <Hobby /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
