import './App.css';
import Button from './components/Button';
import logo from './logo.svg';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <button>el otro botón</button> */}
      {/* <Button/>
      <Button/> */}
      <h1>Hello React!😊</h1>
      <p>Hola chicas</p>
      <Button text='Enviar'/>
      <Button text='Borrar' clase='frame'/>
      <Button clase='solid-green'/>
      <Button text='goodbye'/>
      <div className='container'>
        <img src={logo} alt="logotipo React"/>
        <Counter/>
        <Counter text='👎'/>
      </div>
    </div>
  );
}

export default App;
