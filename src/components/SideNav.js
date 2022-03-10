import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



function SideNav() {

    return (
        <div>
            <ProSidebar className='sideBar'>
                <SidebarHeader>
                    <img className='navLogo' src='/images/logo.png' alt='Logo'/>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem style={{ fontSize: '1.5rem' }}>
                            Home
                            <Link to='/home' />
                        </MenuItem>
                        <MenuItem style={{ fontSize: '1.5rem' }}>
                            Music
                            <Link to='/music' />
                        </MenuItem>
                        {/* <SubMenu title="Music" icon="fas fa-music"> */}
                        <MenuItem style={{ fontSize: '1.5rem' }}>
                            Contact
                            <Link to='/contact' />
                        </MenuItem>
                        
                        {/* </SubMenu> */}
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}



export default SideNav;