import React from 'react';
import Home from './page/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import ClientList from './page/ClientLIst';
 
function App() {
 
  return (
    <Router>
      <div>
            <Routes>                   
               <Route path="/" element={<Home/>}/>
            </Routes>     
            <Routes>                   
               <Route path="/list" element={<ClientList/>}/>
            </Routes>                  
      </div>
    </Router>
  );
}
 
export default App;