import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function SideNav() {

    return (
        <ProSidebar>
            <SidebarHeader>
                <img className='navLogo' src='/images/logo.png' alt='Logo'/>
            </SidebarHeader>
            <Menu iconShape="square">
                <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<FaHeart />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}



export default SideNav;