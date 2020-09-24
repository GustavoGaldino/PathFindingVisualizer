import React , { useState } from 'react'
import Modal from '@material-ui/core/Modal'

import HelpModalBody from './HelpModalBody'

import helpIcon from '../../../../../assets/images/help.png'

import './styles.css'

const CellInfo = (props) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div className="cell-info">
            <div className="cell-representation" style={{backgroundColor: props.cellColor}}/>
            <div className="cell-info-text-container">
                <div>
                    <h1 style={{fontSize: "1.2rem"}}>{props.cellInfoTitle}</h1>
                    <p style={{fontSize: "1.05rem"}}>{props.cellInfoParagraph}</p>
                </div>
                {props.help ?
                    <>
                        <button className="help-btn" onClick={() => {
                            handleOpen();
                        }}>
                            <img src={helpIcon} />
                        </button>
                        <Modal
                            style={{display: "flex", justifyContent: "center", alignItems: "center", outline: "0"}}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <HelpModalBody />
                        </Modal>
                    </>
                    :
                    (() => {})
                }
            </div>
        </div>    
    );
}

export default CellInfo;