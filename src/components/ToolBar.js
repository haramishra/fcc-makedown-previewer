import React from 'react'

function ToolBar(props) {
    return (
        <div>
            {props.fullWidth ? "original size" : "Full width"}
        </div>
    )
}

export default ToolBar
