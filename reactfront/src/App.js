import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//IMPORT OUR COMPONENTS
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import ShowUser from './components/usuario/ShowUser';
import CreateUser from './components/usuario/CreateUser';
import EditUser from './components/usuario/EditUser';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <ShowProducts/> } />
                    <Route path='/create' element={ <CreateProduct/> } />
                    <Route path='/edit/:id' element={ <EditProduct/> } />

                    <Route path='/user/' element={ <ShowUser/> } />
                    <Route path='/user/create' element={ <CreateUser/> } />
                    <Route path='/user/edit/:id' element={ <EditUser/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
