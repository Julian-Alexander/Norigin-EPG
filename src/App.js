import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { HeaderMenu } from './components/header/headerMenu.component';
import { ShowView } from './components/showView/showView.component';
import { EPGContent } from './components/epgContent/epgContent.component';

export function App() {
  return (
    <Router>
      <HeaderMenu />
      <Route path="/" exact strict component={EPGContent} />
      <Route path="/program/:id" exact component={ShowViewRoute} />
    </Router>
  );
}

function ShowViewRoute({ match }) {
  return <ShowView id={match.params.id} />;
}
