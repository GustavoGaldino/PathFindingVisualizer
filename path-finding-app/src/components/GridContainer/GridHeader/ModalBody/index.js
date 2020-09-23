import React, { forwardRef } from 'react'

import './styles.css'

const ModalBody = forwardRef((props,ref) => {
    return(
        <div ref={ref} id="modal-body">
            <h1>Hello, World!</h1>
        </div>
    );
});

export default ModalBody;