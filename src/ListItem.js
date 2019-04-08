import React from 'react';

const ListItem = (props) => (

    <li
        style={props.active ? { fontWeight: 'bold' } : { color: 'grey' }}
        onClick={() => props.order(props.id)}>
        {props.name}
    </li>
)

export default ListItem;