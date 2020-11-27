import React,{Component, Fragment} from 'react'; 
import {Link} from 'react-router-dom';

import HeaderConfig from './HeaderConfig'

import logo from '../../assets/images/logo-black.png'


class Header extends Component{

    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e)=>{
        const header = document.querySelector('.header_wrap');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };


    render(){
        return (
        <Fragment>
             <div className="header_wrap">
                <div className="container">
                    <div className="header_logo">
                        <Link to={process.env.PUBLIC_URL + "/"}> 
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="header_menu">
                        <ul>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/service"}>Service</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/products"}>Products</Link>
                            </li> 
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                            </li> 
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/cart"}>Cart</Link>
                            </li> 
                            <li>
                                <HeaderConfig   />
                            </li> 
                        </ul>
                    </div>
                </div>
             </div>
             
            

         </Fragment>    
        );
    }
}

export default Header;