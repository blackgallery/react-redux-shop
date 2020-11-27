import PropTypes from "prop-types";
import React, { Fragment } from "react";  
import Footer from "../components/Footer/index"; 
import Header from '../components/Header/index' 

const LayoutOne = ({ children }) => {
  return (
    <Fragment>
      <Header /> 
      {children} 
      <Footer />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutOne;
