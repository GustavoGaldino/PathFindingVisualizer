import React, { useState } from 'react'

import GridRow from './GridRow'

const GridComponent = (props) => {    

    const [canPaint, setCanPaint] = useState(false);

    document.body.onmousedown = () => {setCanPaint(true)};

    document.body.onmouseup = () => {setCanPaint(false)};

    return(
        <div className="grid">
            {props.grid.gridTable && props.grid.gridTable.map((row,index) => (
                <GridRow
                    row={row}
                    key={index}
                    cellSize={props.cellSize}
                    canPaint={canPaint}
                    toggleAvailableCell={props.toggleAvailableCell}
                />
            ))}
        </div>
    );
}

export default GridComponent;