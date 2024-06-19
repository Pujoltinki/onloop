import React, { useEffect, useState } from 'react'
import { pedirDatos }                 from '../Helpers/pedirDatos'
import { useParams }                  from 'react-router-dom';
import ItemList                       from './ItemList'

const ItemListContainer = () => {

  const [productos, setProductos]  = useState([])
  const [titulo, setTitulo]        = useState("Productos");

  const categoria = useParams().categoria;

  useEffect(() => {
    pedirDatos()
        .then((res) => {
          if (categoria){
            setProductos( res.filter((prod) => prod.categoria === categoria) );
            setTitulo(categoria);
          } else {
            setProductos(res);
            setTitulo("Productos");
          }
        })
  }, [categoria])
  
  return (
    <div>
      <ItemList productos={productos} titulo={titulo}></ItemList>
    </div>
  )
}

export default ItemListContainer