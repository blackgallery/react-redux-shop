import React from 'react';
import SidebarMenu from "../OffCanvas/SidebarMenu";
import LoginRegister from "../OffCanvas/LoginContent";
import {Link} from 'react-router-dom';

function HeaderConfig() {

    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }
 
    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }
    return (
        <div className="header-action mt-lg-3 text-right"> 
            <button onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-cog"/></button>
            <button onClick={MobileMenuHandler} className="btn-menu"><i className="fa fa-bars"/></button>

            <Link to={process.env.PUBLIC_URL + "/cart"}> 
                <i className="fa fa-shopping-cart"> </i>
            </Link>
            <LoginRegister />
            <SidebarMenu />

        </div>
    );
}
 
export default HeaderConfig;