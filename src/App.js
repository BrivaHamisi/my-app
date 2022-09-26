import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import FunComponent from './components/funComponent'
import MyClass from './components/MyClass'
import Name from './components/Name'
import Example from './components/Example'

function App() {
  function clicked(){
    alert("Inside App.js")
  }

  return (
    <div className='container'>
      <Name/>
      <Example/>
    </div>
  );
}

export default App;
