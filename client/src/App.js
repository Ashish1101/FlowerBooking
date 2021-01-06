import React from 'react';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import Dashboard from './admin/Dashboard'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import MergeRegister from './admin/MergeRegister'
import {store , persistor} from './Store/store'
import PrivateRoute from './Common/PrivateRoute'
import './App.css'
import {Toaster} from 'react-hot-toast'
function App() {
  return (
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <Router>
           <Switch>
             <PrivateRoute exact path="/" component={Dashboard} />
             {/* <Route exact path="/register" component={Register} />
             <Route exact path="/login" component={Login} /> */}
             <Route exact path="/merchant" component={MergeRegister}/> 
            </Switch>
       </Router>
       </PersistGate>
       <Toaster position='top-right' />
       </Provider>
  );
}

export default App;
