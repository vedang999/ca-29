import React from 'react';

const NavLink = ({ children, href, ...props }) => (
    <a href={href} {...props} className={`py-2.5 px-4 text-center rounded-full duration-150 ${props?.className || ""}`}>
        {children}
    </a>
);

export default NavLink;
