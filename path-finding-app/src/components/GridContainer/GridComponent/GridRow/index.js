import React from 'react'

import GridCell from './GridCell'

const GridRow = (props) => {
    return(
        <div className="grid-row" style={{height: props.cellSize}}>
            {props.row.map((cell) => (
                <GridCell
                    cell={cell}
                    key={cell.key}
                    cellSize={props.cellSize}
                    canPaint={props.canPaint}
                    toggleAvailableCell={props.toggleAvailableCell}
                />
            ))}
        </div>
    );
}

export default GridRow