import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Details from './pages/Details/Details';
import Footer from './pages/footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Singup from './pages/singup/Singup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/singup">
         <Singup></Singup>
        </Route>
        <Route path="/details/:foodId">
        <Details></Details>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
