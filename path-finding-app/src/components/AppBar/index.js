import React from 'react';

import './styles.css'

import algorithmIcon from '../../assets/images/algorithm.png'

const AppBar = () => {
    return(
        <div className="app-bar">
            <h1 className="app-bar-title">Path Finding Algorithms Visualizer</h1>
            <img src={algorithmIcon} alt="algorithm-icon" />
         </div>
    ); 
}

export default AppBar;