import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Switch} from 'react-router-dom';
import * as Pages from './pages';
import Dashboard from './components/Dashboard/dashboard';
import Preferences from './components/Preferences/preferences';

function App() {
  return (
    
    <div className="App">
   
      <Routes>
        <Route exact path='/' element={<Pages.Home />}></Route>
        <Route path='/ingredients' element={<Pages.Ingredients/>}></Route>
        <Route path='/shelf' element={<Pages.Shelf/>}></Route>
        <Route path='/login' element={<Pages.Login />} />
        <Route path='/register' element={<Pages.Register />} />
        <Route path='/logout' element={<Pages.LogOut />} />
        <Route path='/profile' element={<Pages.Profile />} />
        <Route path='/fridge' element={<Pages.Fridge />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/preferences' element={<Preferences/>} />

        {/* <Route path='*' element={<p>nothing to see here</p>} /> */}
        <Route path='*' element={<Pages.NotFoundPage />}/>
                   
      </Routes>
    </div>
    
  );
}

export default App;