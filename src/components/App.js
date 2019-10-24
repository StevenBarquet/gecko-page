import React from 'react'
import  {BrowserRouter, Route} from 'react-router-dom'
import Menu from './menu'
import Usuarios from './usuarios/index';
//cd C:\Users\HP Probook\Documents\A Micro Servicios\redux-app
//npm install redux react-redux
//npm install redux-thunk


const Tareas = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className="margen_100">
        <Route exact path='/' component={Usuarios}/>
        <Route exact path='/tareas' component={Tareas}/>
    </div>
    
  </BrowserRouter>
);

export default App;
