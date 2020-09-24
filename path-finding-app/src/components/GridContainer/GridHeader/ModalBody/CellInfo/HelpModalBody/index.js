import React, { forwardRef }from 'react'

import './styles.css'

import GridWithWallsIcon from '../../../../../../assets/images/AStar.png'

const HelpModalBody = forwardRef((props,ref) => {
    return(
        <div ref={ref} className="help-modal-body">
            <h1>
                To turn a walkable cell into a wall cell, you can click in the walkable cell, or
                click and click and drag to turn multiple cells.
            </h1>
            <img src={GridWithWallsIcon} />
        </div>
    );
});

export default HelpModalBody;