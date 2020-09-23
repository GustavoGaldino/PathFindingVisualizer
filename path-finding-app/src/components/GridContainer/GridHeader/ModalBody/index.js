import React, { forwardRef } from 'react'

import CellInfo from './CellInfo'

import './styles.css'

const ModalBody = forwardRef((props,ref) => {
    return(
        <div ref={ref} id="modal-body">
            <CellInfo
                cellColor={"cyan"}
                cellInfoTitle={"Visited Cell"}
                cellInfoParagraph={"This cell was visited during the algorithm runtime."}
            />
        </div>
    );
});

export default ModalBody;