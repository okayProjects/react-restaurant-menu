import React from 'react';
import ListItem from './ListItem';

const ListItems = (props) => {

    const menuItems = props.menu.map(item => {
        return (
            <ListItem key={item.id}
                name={item.name}
                active={item.active}
                order={props.order}
                id={item.id} />
        )
    })
    return (
        <>
            <h1>Your order</h1>
            <ul>
                {menuItems}
            </ul>
        </>
    )

}

export default ListItems;