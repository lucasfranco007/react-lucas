import React from 'react';

export const ItemDetail = ({ ...item }) => {
    return <>
        <div>
            <img alt={item.alt} src={item.img} />
            <h3>{item.title}</h3>
            <h4>{item.detail}</h4>
            <h5>${item.price}</h5>
            <button>Agregar al carrito</button>
        </div>
    </>
} 