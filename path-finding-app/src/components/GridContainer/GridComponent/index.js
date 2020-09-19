import React, { useState, useEffect } from 'react'

import GridRow from './GridRow'

const GridComponent = (props) => {    
    return(
        <div className="grid">
            {props.grid.gridTable && props.grid.gridTable.map((row,index) => (
                <GridRow
                    row={row}
                    key={index}
                    cellSize={props.cellSize}
                    toggleAvailableCell={props.toggleAvailableCell}
                />
            ))}
        </div>
    );
}

export default GridComponent;