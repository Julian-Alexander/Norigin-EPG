import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import HeaderMenu from './components/header/headermenu.component';
import FullShow from './components/full/fullshow.component';
import EPG from './components/full/epgfull.component';

function App() {
  return (
    <Router>
      <HeaderMenu />
      <Route path='/' exact strict component={EPG} />
      <Route path='/program/:id' exact component={FullShowRoute} />
    </Router>
  );
}
function FullShowRoute({ match }) {
  return <FullShow id={match.params.id} />;
}

export default App;
