import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import BrackFirst from './pages/BrackFirst/BrackFirst';
import Details from './pages/Details/Details';
import Dinner from './pages/Dinner/Dinner';
import Footer from './pages/footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Lunch from './pages/Lunch/Lunch';
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
        <Route path="/brackFirst">
        <BrackFirst></BrackFirst>
        </Route>
        <Route path="/lunch">
        <Lunch></Lunch>
        </Route>
        <Route path="/dinner">
       <Dinner></Dinner>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
