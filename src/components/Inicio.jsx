//import { useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { unsetUser } from '../features/userSlice';
//import { logout, selectUser } from '../features/userSlice';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import AgregarPaciente from './AgregarPaciente';
//import { MostrarPacientes } from './MostrarPacientes';
import { ListaInstrumento } from './ListaInstrumento';
import './Inicio.css';

export const Inicio = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();


  //const [images, setImages]= useState([]);

  const user = useSelector(state => state.user);


  // useEffect(()=>{
  //  axios.get("http://localhost:4000/api/image/instrumentos").then(response => {
  //    setImages(response.data); //response
  //  })
  //},[])

  const handleLogout = () =>{
    dispatch(unsetUser());
    navigate("/");
  };

  /*
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) =>{
         e.preventDefault();
  
         dispatch(logout());
      }
    */
    
    return(
      <>
    <div className="Inicio">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">MUSICOTERAPIA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
           
            
        </div>
        </nav>


        <p>Bienvenido {user.fullName} / {user.email}</p>   
        <button className='btn btn-primary' onClick={handleLogout}> Log out</button> 
        <hr/>

          <section className='instruments_section'>
             <div className='instruments_container'>
              <ListaInstrumento/>  
              </div> 
          </section>   
        
    
    </div>
    </>
    )

}



// <ListaInstrumento images= {images}/>

//<div className="collapse navbar-collapse" id="navbarSupportedContent">
//<ul className="navbar-nav me-auto mb-2 mb-lg-0">
//    <li className="nav-item">
//    <a className="nav-link active" aria-current="page" href="/">Inicio</a>
//    </li>
   
//    <li className="nav-item">
//    <a className="nav-link" href="agregarpaciente"> Agregar Paciente</a>
//    </li>
    
//    </ul>  
//</div>

     // <div>
     //  <hr/> 
     //        <ListaInstrumento/>   
              
     //   </div>  