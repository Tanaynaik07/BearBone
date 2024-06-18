import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
function App() {
  return (
    
    <div className="App">
       <Routes>
       <Route path={"/"} element={<Home/>}/>
       <Route path={"/product-page"} element={<ProductPage/>}/>
  

       </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
