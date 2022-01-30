import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


function BigPicture() {   
    return(
        <div className="container-fluid bigPicture">
            <div className='bigPictureText'>
                <h1 className='bigPictureText'>Jackie Kopco</h1>
            </div>
            <ProSidebar>
            <SidebarHeader>
                <img className='navLogo' src='/images/logo.png' alt='Logo'/>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon="fas fa-home">Home</MenuItem>
                    <SubMenu title="Components" icon="fas fa-music">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
        </ProSidebar>
            
        </div>
    );
    
}

// function SideNav() {

//     return (
//         <ProSidebar>
//             <SidebarHeader>
//                 <img className='navLogo' src='/images/logo.png' alt='Logo'/>
//             </SidebarHeader>
//             <SidebarContent>
//                 <Menu iconShape="square">
//                     <MenuItem icon="fas fa-home">Home</MenuItem>
//                     <SubMenu title="Components" icon="fas fa-music">
//                     <MenuItem>Component 1</MenuItem>
//                     <MenuItem>Component 2</MenuItem>
//                     </SubMenu>
//                 </Menu>
//             </SidebarContent>
//         </ProSidebar>
//     );
// }

export default BigPicture;