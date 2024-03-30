import React from 'react';
import Logo from './Logo';
// import Image from 'next/image';

const Header = () => {
    return (
        <nav className="py-4 md:py-6 border-b">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                {/* Logo */}
                <Logo />
                {/* Logo Ends */}

            </div>
        </nav>

    );
};

export default Header;

