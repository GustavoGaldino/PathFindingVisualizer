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
        <div className="grid-cell" style={myStyle}
            onClick={() => {
                if(!(props.cell.startingNode || props.cell.goalNode)){
                    props.toggleAvailableCell(props.cell, props.cell.grid);
                }
            }}
            onMouseOver={() => {
                if(props.canPaint && !(props.cell.startingNode || props.cell.goalNode)){
                    props.toggleAvailableCell(props.cell, props.cell.grid);
                }
            }}
        />
    );
}

export default GridCell