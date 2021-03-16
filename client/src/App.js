import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route path='/'  exact/>
     </Switch>
     <Footer/>
   </Router>
  );
}

export default App;
