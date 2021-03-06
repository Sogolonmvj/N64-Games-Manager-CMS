import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import CreateGame from './screens/games/create';
import EditGame from './screens/games/edit';
import ListGame from './screens/games/list';

import './style.scss';

function App() {
  return (

      <Router>
        <AdminLayout>
          <Switch>
            <Route path="/game/edit/:id">
              <EditGame />
            </Route>
            <Route path="/game/create">
              <CreateGame />
            </Route>
            <Route path="/game">
              <ListGame />
            </Route>
            <Route path="/">
              <h1>Home</h1>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game List</Link></li>
                <li><Link to="/game/create">Game Create</Link></li>
                <li><Link to="/game/edit/gfgffgdjgdhd">Game Edit</Link></li>
              </ul>
            </Route>
          </Switch>
        </AdminLayout>
      </Router>
  );
}

export default App;
