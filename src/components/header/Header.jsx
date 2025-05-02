import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <NavLink to="/recipes" className="hover:text-blue-500">
                        Home
                    </NavLink>
                </div>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink to="/dashboard" className="hover:text-blue-500">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/recipes" className="hover:text-blue-500">Recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className="hover:text-blue-500">Users</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
