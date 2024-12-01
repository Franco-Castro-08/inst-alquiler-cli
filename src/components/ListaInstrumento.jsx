import {useEffect, useState} from 'react'
import axios from 'axios'
import './ListaInstrumento.css';
import { useSelector, useDispatch } from "react-redux";  //useSelector
import { addInstrumentToCart } from "../features/cartSlice";
import { removeInstrumentFromCart } from "../features/cartSlice";
                               //{images}
export const ListaInstrumento = () =>{ 
    const dispatch = useDispatch();
    
    const[dataimages, setdataimages]=useState([])


    const { instrumentoList } = useSelector(state => state.cart);
  
    const handleAddOrRemoveInstrument = (instrumentoId) =>{
      const image = dataimages.find(image => image._id === instrumentoId);//const instrumento = instrumentos.find(instrumento => instrumento.id === instrumentoId)
     // dispatch(addInstrumentToCart(instrumento));                                        //if (instrumentoList.find(pdt => pdt.id === instrumentoId))
     if (instrumentoList.find(pdt => pdt.id === instrumentoId)) { 
           dispatch(removeInstrumentFromCart(instrumentoId));                       // (instrumentoId);
      } else {
          dispatch(addInstrumentToCart(image));                             //(instrumento)
      }
    }
     
  
//Agregado
//const[dataimages, setdataimages]=useState([])

useEffect(() => {
  axios.get('api/image/instrumentos').then(res => {
       console.log(res.data) 
       setdataimages(res.data)
  }).catch(err =>{
     console.log(err)
  })
 }, [])



 return(
          <>
          <h2>Lista de Instrumentos</h2>      
          <div class="row">
         {         
            dataimages.map( image => {
            return(                
                 
                    <div className='instrument'>
                    
                     <div key={image._id}>

                     <div class="col-12">
                    <div class="container p-4">
                      <div class="card-body">
                     
                        <img src={image.path} class="card-img-top" alt=''/>
                        <h4 className='instrument_desc'>{image.title}</h4> 
                        <div className='instrument_details'>
                          <p><b>Descripción:</b> {image.description} </p>

                          
                        </div>

                        <p><b>Precio: </b>{image.price} </p>

                        <button
                        className={`btn ${instrumentoList.find(pdt => pdt.id === image._id) ? "btn-danger" : "btn-success"}`}
                        onClick={() => handleAddOrRemoveInstrument(image._id)}
                      >
                        {instrumentoList.find(pdt => pdt.id === image._id) ? "Remover" : "Agregar"} 
                      </button>

                      </div>
                      </div>
                     </div>

                 
                  </div>
                    
                  </div>
               
               )
            }) 
          }
           
           </div>
          

          </>
      )
  }
  //     <div key={image.id}>  </div>
  //<img className='instrument_img' src={image.path} alt=''/>
  
  /*  <img src="image"> {images.path}</img>
  <button
                          className={`btn ${instrumentoList.find(pdt => pdt.id === images._id) ? "btn-danger" : "btn-success"}`}
                          onClick={() => handleAddOrRemoveInstrument(images._id)}
                        >
                          {instrumentoList.find(pdt => pdt.id === images._id) ? "Remove" : "Add"} to Cart
                        </button>
  */