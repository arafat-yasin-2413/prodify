import Link from 'next/link';
import React from 'react';

const NavMenu = () => {
    return (
        <>
            <li><Link className="nav text-base font-semibold tracking-wider" href="/">Home</Link></li>
            <li><Link className="nav text-base font-semibold tracking-wider" href="/allProducts">All Products</Link></li>
            <li><Link className="nav text-base font-semibold tracking-wider" href="/about">About</Link></li>
            <li><Link className="nav text-base font-semibold tracking-wider" href="/contact">Contact</Link></li>
            <li><Link className="nav text-base font-semibold tracking-wider" href="/profile">Profile</Link></li>  
        </>
    );
};

export default NavMenu;