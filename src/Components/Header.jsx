import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header({ search }) {
    const itemsInCart = useSelector((state) => state.cart.items);

    return (
        <div className="fixed top-0 w-full bg-primaryColor font-primaryFont px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between z-10">
            <h1 className="text-thirdColor text-2xl sm:text-3xl font-bold">
                <span className="text-secondaryColor">E</span>-commerce
            </h1>

            <ul className="hidden sm:flex flex-row items-center gap-4 sm:gap-6 text-thirdColor font-semibold mt-4 sm:mt-0 text-lg sm:text-xl">
                <li><a href="#home">Home</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="flex items-center gap-4 mt-4 sm:mt-0 flex-grow sm:flex-grow-0">
                <form className="flex-grow sm:w-[380px]">
                    <input 
                        onChange={search} 
                        className="w-full px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-primaryColor" 
                        type="text" 
                        placeholder="Search by name" 
                    />
                </form>
                <Link className="relative flex items-center" to="/cart">
                    <i className="fa-solid fa-cart-shopping text-thirdColor text-2xl sm:text-3xl"></i>
                    {itemsInCart.length > 0 && (
                        <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {itemsInCart.length}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
}

export default Header;
