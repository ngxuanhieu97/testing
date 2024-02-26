import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as BasicRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import MyComponent from './Example/MyComponent.js';
import ListTodos from './Todos/ListTodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav.js';
import Home from './Example/Home.js';
import ListUser from './Users/ListUser.js';

const App = () => {
  return (
    <BasicRouter>
    <div className="App">
      < Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent /> */}
        {/* <ListTodos /> */}

        {/* <Home/> */}
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<MyComponent />} />
        <Route path="/todo" element={<ListTodos />} />
        <Route path="/users" element={<ListUser />} />
        </Routes>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    </BasicRouter>
  );
}

export default App;
