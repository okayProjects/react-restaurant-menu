import React from 'react';

const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length
    return (
        <>
            <h1>Welcome to 'HARD TIMES' Restaurant</h1>
            <header>Number of ordered dishes {number}</header>
            <h2>Balance due: {number ? `$${number * 10}` : 'Nothing ordered, nothing to pay'}</h2>
        </>
    )
}
export default Header;