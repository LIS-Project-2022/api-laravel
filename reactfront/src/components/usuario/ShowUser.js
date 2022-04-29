import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowUser = () => {
    //State's Variables
    const [users, setUsers ] = useState([]);

    //Function for get users
    const getAllUsers = async () => {
        const response = await axios.get(`${endpoint}/usuarios`);
        setUsers(response.data);
    }

    //function for delete user
    const deleteUser = async (id) => {
        await axios.delete(`${endpoint}/usuarios/${id}`);
        getAllUsers();
    }

    useEffect( () => {
        getAllUsers();
    }, [])

    return(
        <div className='mx-2'>
            <h1 className='mt-4 text-center'>Usuarios</h1>
            <div className='d-flex justify-content-end'>
                <Link to='/user/create' className='btn btn-primary my-2'>Crear Usuario</Link>
            </div>
            <table className='table'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Usuario</th>
                        <th>Tipo Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( (user) => (
                            <tr key={ user.id_usuario }>
                                <td>{ user.nombres }</td>
                                <td>{ user.apellidos }</td>
                                <td>{ user.correo }</td>
                                <td>{ user.usuario }</td>
                                <td>{ user.tipos_usuario.tipo_usuario }</td>
                                <td>
                                    <Link to={`/user/edit/${ user.id_usuario }`} className='btn btn-warning'>Edit</Link>
                                    <button onClick={ () => deleteUser( user.id_usuario ) } className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowUser;