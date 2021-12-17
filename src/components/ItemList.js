import React from 'react';
import Item from './Item';

function ItemList({ items }) {
    console.log(items);
    return (
        <>
            {items.map(item => <Item key={item.id} jsonpack={item} />
            )}
        </>
    );
}


export default ItemList;