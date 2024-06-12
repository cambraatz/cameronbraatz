import React from 'react';

const NavBar = () => {
    const pages = ['/welcome', '/comp_sci', '/landscape'];
    const navLinks = pages.map(page => {
        return (
            <a href={page} key={page}>
                &nbsp;{page}
            </a>
        )
    });
    return (
        <>
            <nav id="nav_bar">
                <div id="nav_name">
                    <p>cameron braatz</p>
                </div>
                <div id= "nav_text">
                    {navLinks}
                </div>
            </nav>
        </>
    );
};

export default NavBar;