import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import About from './About';
import Contact from './/Contact';

import Navigation from './Navigation';
import App from'./App';
import "./app2.css";
 
 
class App2 extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div >
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/App" component={App}/>

            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App2;
