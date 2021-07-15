import React from 'react';

const Nav = (props) => {
    const { title } = props;
    //render multiple elements
    const navLinks = ['Home', 'About', 'Skills', 'Contacts'];
    const displayLinks = navLinks.map(el => {
        return <li key={el}>{el}</li>
    })
    return (
        <>
            <h1>{title}</h1>
            <ul>
                {displayLinks}
            </ul>
        </>
    )
}

export default Nav;