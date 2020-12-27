import React from 'react';
import Dashboard from './admin/Dashboard'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
function App() {
  return (
    <div className="">
       <Router>
           <Switch>
             <Route exact path="/" component={Dashboard} />
           </Switch>
       </Router>
    </div>
  );
}

export default App;
