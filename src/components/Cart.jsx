import { useDispatch, useSelector } from "react-redux"
import { removeInstrumentFromCart } from "../features/cartSlice";


export const Cart = () => {

    const dispatch = useDispatch();
    const {instrumentoList} = useSelector(state => state.cart);

    const handleRemoveInstrument = (instrumentoId) => dispatch(removeInstrumentFromCart(instrumentoId));

    return(
        <>
        <h2>Cart</h2>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Precio</th> 
            </tr>
        </thead> 
        <tbody>
            {instrumentoList.map( (image,i) => {
              return(
                <tr key={image._id}>
                    <td scope="row">{i+1}</td>
                    <td scope="row">{image.title}</td>
                    <td scope="row">{image.description}</td>
                    <td scope="row">{image.price}</td>

                    <td scope="row"><button className="btn btn-danger" onClick={()=> handleRemoveInstrument(image._id)}
                    >Delete</button></td>
                </tr>
              )
            })}
        </tbody> 
        </table>
        </>
    )
}

/*
{instrumentoList.map(image => {
              return(
                <tr>
                    <td scope="row">{image._id}</td>
                    <td scope="row">{image.title}</td>
                    <td scope="row">{image.description}</td>
                    <td scope="row">{image.price}</td>

                    <td scope="row"><button className="btn btn-danger" onClick={()=> handleRemoveInstrument(image._id)}
                    >Delete</button></td>
                </tr>
              )
            })}

 */