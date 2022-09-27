import Form from './components/Form';
import MyFragment from './components/MyFragment';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';

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
