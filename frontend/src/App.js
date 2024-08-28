import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/Nav';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (

    <div className="App">
      <Router> 
        <NavBar />
        <div className = "pages"> 
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/signup" element={<SignUp />}/>
            <Route path = '/login' element={<LogIn />} />
            <Route path= "*" element = {<NotFound />} />
          </Routes>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
