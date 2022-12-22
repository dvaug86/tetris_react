import React from "react";

import "./ControlBox.css"

const ControlBox = ({ controlbox }) => {
    return (
        <ul className="controls controls__left">
            <div>Controls</div>
            <li>P = Pause</li>
            <li>Q = Quit</li>
            <li>Left Arrow = Move Left</li>
            <li>Right Arrow = Move Right</li>
            <li>Up Arrow = Rotate</li>
            <li>Down arrow = Advance Down</li>
            <li>Space Bar = Fast Drop</li>
        </ul>
    );
    };


    export default React.memo(ControlBox);
  
