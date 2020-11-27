
import React from 'react';
import CardList from './CardList'
import FeaturesData from '../../data/Card/card.json'

function Card() {
    return (
        <div className="card-sec"> 
            <div className="container"> 
                <div className="row"> 
                    {
                        FeaturesData.map(card=>(
                            <CardList key={card.id} title={card.title} text={card.text}  />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;

 