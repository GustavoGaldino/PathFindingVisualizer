import React from 'react'

const GridCell = (props) => {
    return(
        <div style={{backgroundColor: (props.cell.available ? "red" : "red"), width: "100px", height: "100px", display: "inline-block", border: "solid black 2px"}}>

        </div>
    );
}

export default GridCell