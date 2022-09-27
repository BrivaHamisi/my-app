import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import FunComponent from './components/funComponent'
import MyClass from './components/MyClass'
import Name from './components/Name'
import Example from './components/Example'
import Example2 from './components/Example2'
import Form  from './components/Form';
import MyFragment from './components/MyFragment';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Try from './components/Try';

function App() {
  return(
    <Router>
    <Routes>
    <Route path="/login" element={<Form/>}></Route>
    <Route path="/"  index={true} element={<MyFragment/>}></Route>
    </Routes>
     
    </Router>
  )
  }
export default App;
