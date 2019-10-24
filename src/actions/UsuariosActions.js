import axios from 'axios';
import {TRAER_TODOS, CARGANDO, ERROR} from '../types/UsuariosTypes'

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
        })


    //try va INTENTAR ejecutar su bloque de código
    try{
        var url = 'https://jsonplaceholder.typicode.com/users';//End Point con usuarios
        var respuesta= await axios.get(url);//en este punto la solicitud ya fue enviada
        //------casos de los actions----------
        dispatch({
            type: TRAER_TODOS,
            payload: respuesta.data
            })
    }//si try no pudo, catch recibe el error
    catch (error)
    {
        dispatch({
            type: ERROR,
            payload: error.message
            })
    }
}