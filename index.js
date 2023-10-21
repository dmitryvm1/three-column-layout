import React from "react";
import './style.css'

export default function ThreeColumnLayout({ top: Top, bottom: Bottom, left: Left, right: Right, center: Center }) {
    return (
        <div className='container'>
            <div className="top-panel">
                <div className="top-content">
                    {Top ? <Top /> : null}
                </div>
                <div className="top-resizer" />
            </div>
            <div className="middle" >
                <div className="left-panel">
                    <div className="left-content">
                        {Left ? <Left /> : null}
                    </div>
                    <div className="left-resizer"></div>
                </div>
                <div className="center-panel">
                    {Center ? <Center /> : null}
                </div>
                <div className="right-panel">
                    <div className="right-resizer"></div>
                    <div className="right-content">
                        {Right ? <Right /> : null}
                    </div>
                </div>
            </div>
            <div className="bottom-panel">
                <div className="bottom-resizer"></div>
                <div className="bottom-content">
                    {Bottom ? <Bottom /> : null}
                </div>
            </div>
        </div>
    )
}