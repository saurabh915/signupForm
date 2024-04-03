import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from"react-router-dom"; 
// import Signuppagetwo from './Components/Signuppagetwo'

function App() {
  return (
    <div className="App">
   {/* <Register/> */}
   <Router>
<Routes>
<Route  path='/' element={<Register/>}></Route>
{/* <Route exact path='/login' element={<Login/>}></Route> */}

</Routes>
<Routes>

<Route  path='/login' element={  <Login/>}></Route>
</Routes>
 

   </Router>
   {/* <Signuppagetwo/> */}
    </div>
  );
}

export default App;
