import { NavLink } from "react-router-dom";

import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";



const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="p-0 m-0 flex items-center justify-between">
            <div>
                <h2 className=" text-white text-[24px] text-bold">Shomir<span className="text-red-500"> kumar</span></h2>
            </div>


            <div className={` flex flex-col gap-6 text-[18px] text-white absolute md:static md:flex-row transition-all ease-in-out duration-700   ${open ? 'top-28 left-36' : 'top-[-1200px] left-36 '}`}>
                <NavLink className='text-white' to='/home'>Home</NavLink>
                <NavLink className='text-white' to='/about'>About</NavLink>
                <NavLink className='text-white' to='/services'>Services</NavLink>
                <NavLink className='text-white' to='/portflio'>Portflio</NavLink>
                <NavLink className='text-white' to='/blog'>Blog</NavLink>
                <NavLink className='text-white' to='/contuct'>Contuct</NavLink>


            </div>




            <div onClick={() => setOpen(!open)} className="md:hidden text-white text-[24px]">
                {open ? <HiOutlineXMark /> : <HiBars3BottomRight />}
            </div>


        </div >
    );
};

export default Header;