import React from 'react';
import OffCanvas from "../UI/OffCanvas"; 

const MobileMenu = () => {
    return (
        <OffCanvas type="menu"> 
            <div className="menu-container"> 
                <div className="card mt-5"> 
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> 
                    </div>
                </div> 
                <div className="card mt-2"> 
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> 
                    </div>
                </div> 
            </div>
        </OffCanvas>
    );
};

export default MobileMenu;