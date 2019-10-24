import React, {Component} from 'react';

import { connect } from 'react-redux';

import *as UsuariosActions from '../../actions/UsuariosActions';
//import '../index.css'
import Background from '../../imagenes/bannerh.jpg';

var homeBanner = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + Background + ")",
  position: "fixed",
  top: "0px",
  left: "0px",
  zIndex: "-2"
};

class Usuarios extends Component{
constructor(){
    super();
    this.llenar_tabla=this.llenar_tabla.bind(this);
    this.titulo_table=this.titulo_table.bind(this);
    this.usuarios_request_fetch=this.usuarios_request_fetch.bind(this);
    this.usuarios_request_fetch_await=this.usuarios_request_fetch_await.bind(this);
    this.usuarios_request_axios_await=this.usuarios_request_axios_await.bind(this);
}
usuarios_request_fetch()
{
    console.log('Solicitud Fetch')
    var url = 'https://jsonplaceholder.typicode.com/users';//End Point con usuarios
    
		fetch(url)//en este punto la solicitud ya fue enviada
        .then(res => res.json())//resivimos la respuesta y la guardamos en res
        .catch(error => console.error('Error:', error))//si hubo un error desconocido se imprime en consola => error: 'el error'
        //si la respuesta no es un error desconocido evaluamos la respuesta recibida almacenada en la variable temporal response
        .then(response => {
                            console.log('Respuesta proveniente de fetch', response); //response es la respuesta obtenida
                            }
                    );

}
async usuarios_request_fetch_await()
{
    console.log('Solicitud Fetch await')
    var url = 'https://jsonplaceholder.typicode.com/users';//End Point con usuarios
    
    var respuesta= await fetch(url)//en este punto la solicitud ya fue enviada
    var json= await respuesta.json()
    console.log('Respuesta proveniente de fetch await', json); //response es la respuesta obtenida
}
async usuarios_request_axios_await(estado)
{
    console.log('Solicitud Axios await')
    //var url = 'https://jsonplaceholder.typicode.com/users';//End Point con usuarios
    
    //var respuesta= await axios.get(url);//en este punto la solicitud ya fue enviada
    
}
titulo_table()
{
    return(
    <tr>
      <th>
          Nombre
      </th>
      <th>
          Correo
      </th>
      <th>
          Enlace
      </th>
  </tr>
    )
}
llenar_tabla()
{
    return(
            this.props.usuarios.map( (usuario, i) =>
                {
                    return(
                            <tr key={i}>
                                <td>
                                    {usuario.name}
                                </td>
                                <td>
                                    {usuario.email}
                                </td>
                                <td>
                                    {usuario.website}
                                </td>
                            </tr>
                        )
                }
            )
    )
}
componentDidMount()
{
    //this.usuarios_request_axios_await('usuarios')
    
}
  render(){
      console.log(this.props)
    return (
      <React.Fragment>
          <div style={ homeBanner }></div>
          <table className="tabla">
              <thead>
                  {/*this.titulo_table()*/}
              </thead>
              <tbody>
                  {this.llenar_tabla()}
              </tbody>
          </table>
        </React.Fragment>   
    );
  }
}

const mapStateToProps = (reducers) =>{
    return reducers.UsuariosReducer;
};

export default connect(mapStateToProps,  UsuariosActions  ) (Usuarios);


