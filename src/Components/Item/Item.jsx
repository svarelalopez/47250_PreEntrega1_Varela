import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="cardProduct">
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio}</p>
        <p># {id}</p>
        {/* <button>Ver más</button> */}
        <Link to={`/item/${id}`}>Ver Detalles del Producto</Link>


    </div>
  )
}

export default Item