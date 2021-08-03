
import './Style/App.css';
import Homepage from './Component/Homepage';
import Header from './Component/Header';
import Articlepage from './Component/Articlepage';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import About from './Component/About';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/' render={()=><Homepage/>} />
          <Route exact path='/articles' render={()=><Articlepage/>} />
          <Route exact path='/about' render={()=><About/>} />
          <Redirect to='/'/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
