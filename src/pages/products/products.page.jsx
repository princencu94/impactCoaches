import React from 'react';
import './products.styles.css';
import HelpCards from '../../components/help-cards/help-cards.component';


const cardsData = [
    {
        id:1,
        header:"Private FB Group", 
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:2,
        header:"Weekly Coaching Calls", 
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:3,
        header:"Strategy Inbox", 
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:4,
        header:"Support Inbox", 
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const ProductPage = () => {
    return (
        <div className="product-page-container">
            <div className="page-title">
                <h1>Need Help? We got you covered.</h1>
            </div>
            <div className="page-content">
                {
                    cardsData.map(cardData =>
                        <HelpCards key={cardData.id} cardData={cardData} />
                    )
                }
                
            </div>
        </div>
    )
}

export default ProductPage;