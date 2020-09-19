import React from 'react'

const GridCell = (props) => {

    const myStyle = {
        backgroundColor: props.cell.available? (props.cell.startingNode? "green" : (props.cell.goalNode? "red" : (props.cell.visited? "cyan" : "white") ) ) : "black",
        width: props.cellSize,
        height: props.cellSize,
        border: "solid 1px black",
        display: "inline-block"
    }

    return(
        <div className="grid-cell" style={myStyle} />
    );
}

export default GridCell