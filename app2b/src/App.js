import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton'
import Acd from './components/Acordeon'
import Alr from './components/Alerta2'
import Bdg from './components/Badge'
import Crd from './components/card'
import Clls from './components/collapse'
import Drdw from './components/dropdown'



function App() {
  return (
    <>
    
   <Clls/>

    <h1>Buenas</h1>
    <Boton Nombre={'Boton'}>
      
    </Boton>

    <br/>
    <br/>

    <Acd/>

    <br/>
    <br/>

    <Alr/>
    <br/>
    <br/>
    <Bdg/>

    <br/>
    <br/>

    <Crd/>
    <br/>
    <br/>

    <Drdw/>
    
    </>
  );
}

export default App;
