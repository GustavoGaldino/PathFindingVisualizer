import React from 'react'

import helpIcon from '../../../assets/images/help.png'
import startIcon from '../../../assets/images/start.png'

const GridHeader = () => {
    return(
        <div className="grid-header" style={{border: "solid 1px black", paddingTop: "4px", display: "flex", justifyContent: "center"}}>
            <button>
                <img src={helpIcon} style={{margin: "0 4rem"}}/>
            </button>
            <button>
                <img src={startIcon} style={{margin: "0 4rem"}}/>
            </button>
        </div>
    )
}

export default GridHeader