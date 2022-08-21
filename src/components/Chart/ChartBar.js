import React from "react";
import './ChartBar.css';

const ChartBar=(props)=>{
    let barFillHeight='0%';
    if(props.maxValue>0){
        barFillHeight=Math.round((props.value/props.maxValue)*100)+'%' ;
    }

    return(
        <div className="chart-bar">
        {/* style wants an object to apply styling. The outer curly braces is for outputting something dynamically and inner curly braces is because we are using a JS object  */}
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    );
};

export default ChartBar;
