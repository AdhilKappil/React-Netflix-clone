// NavBar.jsx
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import './Navbar.css';

function NavBar() {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shouldAddBackground = scrollTop > 50;

            setIsScrolling(shouldAddBackground);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`container banner flex items-center justify-between ${isScrolling ? 'scrolling' : ''}`}>
            <div className="flex items-center space-x-4">
                <div className="ml-40">
                    <img
                        className="img-log ml-5"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <ul className="ul-nav flex space-x-4 list-none ml-auto">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>News & Popular</li>
                        <li>My list</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
            </div>
            <div className="right-div  items-center justify-between">
                    <dvi className="right-chiled"><FiSearch size={25}/></dvi>
                    <dvi className="right-chiled"><FaRegBell size={25}/></dvi>
                    <dvi className="right-chiled"> <img className="avatar" src="/Images/avatar.png" alt="" /></dvi>
            </div>
        </div>
    );


}

export default NavBar;
