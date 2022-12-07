import './App.css';
import tareasLogo from './imagenes/portapapeles.png';
import ListaDeTareas from './componentes/Lista de tareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
     <div className='logo-contenedor'>
     <img 
     src={ tareasLogo }
     className='freeLogo' />
    </div>
    <div className='lista-de-tareas'>
      <h1>Mis tareas</h1>
       <ListaDeTareas />
    </div>
  </div>

  );
}

export default App;
