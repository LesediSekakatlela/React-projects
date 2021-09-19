import React from "react";
import reactDom from "react-dom";

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                dtywqt7iudwjlkwad huuhuyuy
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;