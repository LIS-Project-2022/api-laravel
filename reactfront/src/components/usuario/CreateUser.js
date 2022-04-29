import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const CreateUser = () => {

    const [ userData, setUserData ] = useState({
        nombres: "",
        apellidos: "",
        correo: "",
        usuario: "",
        password: "",
        id_tipo_usuario: 0
    });
    const [ typesUser, setTypesUser ] = useState([]);
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(`${endpoint}/usuarios`, userData);
        navigate('/user')
    }

    const getAllTypesUser = async () => {
        const response = await axios.get(`${endpoint}/tiposusuario`);
        setTypesUser(response.data);
    }

    useEffect( () => {
        getAllTypesUser();
    }, [])

    return(
        <div className='container'>
            <h3 className='mt-3 text-center'>Crear Usuario</h3>
            <form onSubmit={ store } className='row'>
                <div className='mb-3 col-6'>
                    <label className='form-label'>Nombres</label>
                    <input
                        type="text"
                        value={ userData.nombres }
                        onChange={ (e) => setUserData( { ...userData, nombres: e.target.value } ) }
                        className='form-control'
                    />
                </div>

                <div className='mb-3 col-6'>
                    <label className='form-label'>Apellidos</label>
                    <input
                        type="text"
                        value={ userData.apellidos }
                        onChange={ (e) => setUserData( { ...userData, apellidos: e.target.value } ) }
                        className='form-control'
                    />
                </div>

                <div className='mb-3 col-6'>
                    <label className='form-label'>Correo electronico</label>
                    <input
                        type="email"
                        value={ userData.correo }
                        onChange={ (e) => setUserData( { ...userData, correo: e.target.value } ) }
                        className='form-control'
                    />
                </div>

                <div className='mb-3 col-6'>
                    <label className='form-label'>Usuario</label>
                    <input
                        type="text"
                        value={ userData.usuario }
                        onChange={ (e) => setUserData( { ...userData, usuario: e.target.value } ) }
                        className='form-control'
                    />
                </div>

                <div className='mb-3 col-6'>
                    <label className='form-label'>Tipo de Usuario</label>
                    <select className="form-select" value={ userData.id_tipo_usuario } onChange={ (e) => setUserData({ ...userData, id_tipo_usuario: e.target.value })}>
                        <option value='0'>Seleccione una opcion</option>
                        {
                            typesUser.map( typeUser => (
                                <option key={ typeUser.id_tipo_usuario } value={ typeUser.id_tipo_usuario }>{ typeUser.tipo_usuario }</option>
                            ))
                        }
                    </select>
                </div>

                <div className='mb-3 col-6'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        type="password"
                        value={ userData.password }
                        onChange={ (e) => setUserData( { ...userData, password: e.target.value } ) }
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    )
}

export default CreateUser;