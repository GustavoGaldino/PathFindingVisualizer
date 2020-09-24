import React, { forwardRef }from 'react'

import './styles.css'

import GridWithWallsGif from '../../../../../../assets/images/helpdemo.gif'

const HelpModalBody = forwardRef((props,ref) => {
    return(
        <div ref={ref} className="help-modal-body">
            <h1>
                To turn a walkable cell into a wall cell, you can click in the walkable cell to modify a single cell, or
                click and click and drag to modify multiple cells.
            </h1>
            <img src={GridWithWallsGif} />
        </div>
    );
});

export default HelpModalBody;