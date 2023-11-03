import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import { PrivateRoute } from './components/index';
import Login from './components/LoginForm';
import { ItemProvider } from './pages/itemcontext/itemcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const App = () => {
  return (
    <div className="App">
      <ItemProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Pages.Register />} />
            <Route path="/*" element={<Pages.NotFoundPage />} />
            
            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Pages.Home />} />
              <Route path="/list" element={<Pages.List />} />
              <Route path="/recipefinder" element={<Pages.RecipeFinder />} />
              <Route path="/profile" element={<Pages.Profile />} />
              <Route path="/ingredients" element={<Pages.Ingredients />} />
            </Route>
          </Routes>
        </Router>
      </ItemProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
