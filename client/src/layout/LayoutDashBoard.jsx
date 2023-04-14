import React from 'react';
import TopBar from "../modules/dashboard/TopBar"
import SideBar from "../modules/dashboard/SideBar"
const LayoutDashBoard = ({children}) => {
    return (
        <div className='bg-lite w-full p-10'>
            <TopBar></TopBar>
            <div className='flex gap-10'>
            <SideBar></SideBar>
            <div>
            {children}
            </div>
            </div>
        </div>
    );
};

export default LayoutDashBoard;