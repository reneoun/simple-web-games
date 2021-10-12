import { GameCard } from "./components/GameCard";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Game420 } from "./components/Game420";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/420game' component={Game420} />
        
      </div>
    </Router>
  );
}

export default App;
