import React, { useState } from 'react';
import './help-cards.styles.css';
import CardModal from '../card-modal/card-modal.component';

const HelpCards = ({ cardData }) => {
    const { header, content } = cardData;
    const [toggleModal, setToggleModal] = useState(false);

    const openModal = () => {
        setToggleModal(!toggleModal)
    } 

    console.log(toggleModal);
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
                <button onClick={openModal} className="select-button">
                    Continue
                </button>
            </div>

            {
                toggleModal ?
                <CardModal closeModal={openModal} otherContent={content} />
                :
                null
            }
           
           
        </div>
    )
}

export default HelpCards;