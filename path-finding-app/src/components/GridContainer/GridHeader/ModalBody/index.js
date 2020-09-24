import React, { forwardRef } from 'react'

import CellInfo from './CellInfo'

import './styles.css'

const ModalBody = forwardRef((props,ref) => {
    return(
        <div ref={ref} id="modal-body">
            <h1 style={{margin: ".5rem 0"}}>Description</h1>
            <CellInfo
                cellColor={"cyan"}
                cellInfoTitle={"Visited Cell"}
                cellInfoParagraph={"This is the visited cell. It was visited during the algorithm runtime."}
            />
            <CellInfo
                cellColor={"white"}
                cellInfoTitle={"Walkable Cell"}
                cellInfoParagraph={"This is the walkable cell, not yet visited by the algorithm."}
            />
            <CellInfo
                cellColor={"black"}
                cellInfoTitle={"Wall Cell"}
                cellInfoParagraph={"This is the wall cell. This cell is not walkable."}
                help={true}
            />
            <CellInfo
                cellColor={"green"}
                cellInfoTitle={"Starting Cell"}
                cellInfoParagraph={"This is the starting cell. It's the first cell considered by the algorithm."}
            />
            <CellInfo
                cellColor={"red"}
                cellInfoTitle={"Goal Cell"}
                cellInfoParagraph={"This is the goal cell. It's the cell the algorithm is searching for."}
            />
        </div>
    );
});

export default ModalBody;