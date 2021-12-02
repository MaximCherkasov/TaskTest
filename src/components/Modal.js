import React from 'react';

const Modal = ({modal}) => {
    return (
        <div>
            {
                modal === true
                    ?
                    <div className={'firstModal'}>
                        Comment sent
                    </div>
                    :
                    null
            }
        </div>
    );
};

export default Modal;