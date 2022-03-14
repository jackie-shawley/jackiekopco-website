import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';



function SideNav() {

    return (
        <div>
            <ProSidebar className='sideBar'>
                <SidebarHeader>
                    <img className='navLogo' src='/images/logo.png' alt='Logo'/>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem style={{ fontSize: '1.5rem' }}>
                            Home
                            <NavLink to='/home' />
                        </MenuItem>
                        <MenuItem style={{ fontSize: '1.5rem' }}>
                            Music
                            <NavLink to='/music' />
                        </MenuItem>
                        {/* <SubMenu title="Music" icon="fas fa-music"> */}
                        <MenuItem style={{ fontSize: '1.5rem' }}>
                            Contact
                            <NavLink to='/contact' />
                        </MenuItem>
                        
                        {/* </SubMenu> */}
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}



export default SideNav;