import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';


function SideNav() {

    return (
        <ProSidebar className='sideBar'>
            <SidebarHeader>
                <img className='navLogo' src='/images/logo.png' alt='Logo'/>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon="fa-home">Home</MenuItem>
                    <MenuItem icon="music">Music</MenuItem>
                    {/* <SubMenu title="Music" icon="fas fa-music"> */}
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    {/* </SubMenu> */}
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
}



export default SideNav;