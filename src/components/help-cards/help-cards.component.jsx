import React from 'react';
import './help-cards.styles.css';

const HelpCards = ({ cardData }) => {
    const { header, content } = cardData;
    return (
        <div className="help-card-container">
            <div className="content-section">
                <div className="title">
                    <h2>{header}</h2>
                </div>
                <div className="content">
                    <p>
                        {content}
                    </p>
                </div>
            </div>

            <div className="call-to-action"> 
                <button className="select-button">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default HelpCards;