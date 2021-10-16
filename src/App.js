import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import BrackFirst from './pages/BrackFirst/BrackFirst';
import Details from './pages/Details/Details';
import Dinner from './pages/Dinner/Dinner';
import Footer from './pages/footer/Footer';
import Header from './pages/Header/Header';
import Headbenner from './pages/Header/HedBenner/Headbenner';
import Menu from './pages/Header/Menu/Menu';
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
        <Headbenner></Headbenner>
        <Menu></Menu>
          <Home></Home>
          
        </Route>
        <Route exact path="/home">
        <Headbenner></Headbenner>
        <Menu></Menu>
          <Home></Home>
        </Route>
        

        <Route path="/login">
          <Login></Login>
        </Route>
        
        <Route path="/details/:foodId">
        <Details></Details>
        </Route>
        <Route path="/brackFirst">
          <Menu></Menu>
        <BrackFirst></BrackFirst>
        </Route>
        <Route path="/lunch">
        <Menu></Menu>
        <Lunch></Lunch>
        </Route>
        <Route path="/dinner">
        <Menu></Menu>
       <Dinner></Dinner>
        </Route>
        <Route path="/singup">
         <Singup></Singup>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
