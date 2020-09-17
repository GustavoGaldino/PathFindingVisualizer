import React from 'react'

import Grid from '../Grid'

import './styles.css'

export default function Landing(){
    return(
        <div id="landing">
            <Grid
                rows={20}
                cols={20}
                cellSize={"20px"}
            />
        </div>
    );
}