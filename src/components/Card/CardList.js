import React from 'react';

function CardItem(props) {
    return ( 
 
            <div className="col-md-6"> 
                <div className="card mt-4"> 
                    <div className="card-body">
                        <h4 className="card-title"> {props.title} </h4>
                        <p className="card-text"> {props.text}</p>
                        <a href="/" className="btn btn-info">See Profile</a>
                    </div>
                </div>       
            </div>    
    );
}

export default CardItem;