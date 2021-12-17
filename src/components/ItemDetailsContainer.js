import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../components/ItemDetails';


const productos = [
    {
        title: 'Remera LEVIS',
        detail: 'Encontra la mejor variedad de nuetras mejores remeras LEVIS para vos y para toda tu familia,Consulta talles y stock',
        price: '1000-3000',
        stock: 15,
        id: 1
    }
]
const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => productos.length > 0 ? resolve(productos) : reject("Error al obtener los productos. Intenta nuevamente en unos instantes"), 3000);
    })
};
export const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    useEffect(() => {
        getItems().then(detail => {
            const detalleProducto = detail
            setProductDetail(detalleProducto)
        }, [])
    })

    return <React.Fragment>
        {productDetail.map((item, i) => {
            return <ItemDetail key={i} {...item} />
        })}
    </React.Fragment>
}; 