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

function App() {
  function clicked(){
    alert("Inside App.js")
  }

  return (
    <div className='container'>
      {/* <Name/>
      <Example names={['Python', 'Java', 'Javascript','C#']} />
      <Example2 names={['React', 'React Native', 'Django','Flask']} />
      <Form/> */}
       <MyFragment/>
    </div>
  );
}

export default App;
