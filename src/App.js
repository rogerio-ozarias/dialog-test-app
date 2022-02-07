import Home from './pages/Home';
import Search from './pages/Search';
import User from './pages/User';
import Header from './pages/Components/Header';

import { Switch, Route, Link } from 'react-router-dom';

const App = () => {      

    return (          
        <div className="App">
          <Header /> 
          <Switch>
            <Route path="/" exact component={Home} />          
            <Route path="/user/:id" component={User} />      
            <Route path="/search/:search" component={Search} />          
          </Switch>                  
        </div>      
    ); 
}
export default App;