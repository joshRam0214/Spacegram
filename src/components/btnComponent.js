import React from 'react'
import '../styles/App.scss';
export default function BtnNomination(props) {
    return (
        <div>
            <button type="button" onClick={props.onClickBtn} className={props.classFeatures} disabled={props.disableBtn} title={props.tooltip}>{props.heading}</button>
            {/* <button type="button" className={props.classFeatures} title={props.tooltip} disabled={props.disableBtn}>{props.heading}</button> */}
        </div>
    )
}
