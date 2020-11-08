import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import BookDetails from './pages/BookDetails'
import Bookpage from './pages/Bookpage'
import Delete from './pages/Delete'
import Update from './pages/Update'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Create from './pages/Create'
import Footer from './pages/Footer'
import Header from './pages/Header'
import NotFound from './pages/NotFound';

import './App.css';


function App() {
  return (

    <BrowserRouter>

      <div className="App">
        <Header />
        <Switch>
          
          <Route path="/" component={Home} exact/>
          <Route path="/Bookpage" component={Bookpage} exact/>
          <Route path="/Admin" component={Admin} exact/>
          <Route path="/Weather" component={Weather} exact/>
          <Route path="/Create" component={Create} exact/>
          <Route path="/Book/:bookID" component={BookDetails} exact/>
          <Route path="/Delete/:bookID" component={Delete} exact/>
          <Route path="/Update/:bookID" component={Update} exact/>
          <Route component={NotFound} />
          
        </Switch>
        <Footer />
      </div>

      </BrowserRouter>
  );
}

export default App;
