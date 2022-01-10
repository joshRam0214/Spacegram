import React, {Component} from 'react'

export default function Options(props) {
    
    const updateOpts = () =>{
        props.optsUpdate(document.getElementById('opts').checked);
        //console.log("checked: " + document.getElementById('opts').checked)
    }

    return (
        <form onChange={updateOpts}>
            <div>
                <input type="checkbox" id="opts"/>
                <label className="w-75" for="opts">Show Poster</label>
            </div>
        </form>
    )
}
