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
