import React from 'react';
import './card-modal.styles.css';


const CardModal = ({closeModal , otherContent}) => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={closeModal} class="close">&times;</span>
                <p>{otherContent}</p>

            </div>
        </div>
    )
}

export default CardModal;