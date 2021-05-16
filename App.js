import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar } from './components/Index';
import GlobalStyle from './globarStyles';
import Array from './pages/cards/Array';
import Queue from './pages/cards/Queue';
import Sort from './pages/cards/Sort';
import Stack from './pages/cards/Stack';
import Trees from './pages/cards/Trees';
import Home from './pages/HomePage/Home';
import Topics from './pages/Topics/Topics'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/topics" exact component={Topics} />
        <Route path="/stack" exact component={Stack} />
        <Route path="/array" exact component={Array} />
        <Route path="/queue" exact component={Queue} />
        <Route path="/sort" exact component={Sort} />
        <Route path="/trees" exact component={Trees} />
        <Route path='/help' component={() => { 
     window.location.href = 'https://www.academia.edu/37438547/Data_Structures_and_Algorithms_in_Java_6th_Edition_2014_pdf'; 
     return null;
}}/>
      </Switch>
    </Router>
  );
}

export default App;
