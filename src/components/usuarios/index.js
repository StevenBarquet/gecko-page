import React, {Component} from 'react';

import { connect } from 'react-redux';

import { Col, Row } from 'react-bootstrap'

import *as UsuariosActions from '../../actions/UsuariosActions';
//import '../index.css'

//Componentes
import CentralBoxHome from './CentralBoxHome';

//imagenes
import Background from '../../imagenes/home/bannerh.jpg';
import homeStart1 from '../../imagenes/home/homeStart1.png';
import homeStart2 from '../../imagenes/home/homeStart2.png';
import homeStart3 from '../../imagenes/home/homeStart3.png';
import homeStart4 from '../../imagenes/home/homeStart4.png';

class Usuarios extends Component{
    state={ auxClass: '' }
componentDidMount()
{
    setTimeout( ()=>{
        this.setState({auxClass: 'invisible' })
    }, 9500);
}
  render(){
    const { auxClass } = this.state
    return (
      <React.Fragment>
          <div className={'homeText '+auxClass}>Preparate...</div>
          <div className="homeBanner"><img src={Background} alt="Gecko Logo" width="100%"/> </div>
          <div className="cuadros-container">
          <Row>
                <Col lg={12}>
                    <CentralBoxHome
                        text="Hoy en día, cualquiera puede estar en la red."
                        styles="box-container"
                        url={homeStart1}/>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <CentralBoxHome
                        text="¿Publicidad, imagen desarrollo, p
                        tecnológico y empresarial?
                        Nosotros te ayudamos"
                        styles="box-container"
                        url={homeStart3}/>
                </Col>
                <Col lg={6}>
                    <CentralBoxHome
                        text="Destaca entre miles de personas "
                        styles="box-container"
                        url={homeStart2}/>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <CentralBoxHome
                        text="Todo lo que necesitas para Ganar en tu emprendimiento."
                        styles="box-container"
                        url={homeStart4}/>
                </Col>
            </Row>
          </div>
        </React.Fragment>   
    );
  }
}

const mapStateToProps = (reducers) =>{
    return reducers.UsuariosReducer;
};

export default connect(mapStateToProps,  UsuariosActions  ) (Usuarios);


