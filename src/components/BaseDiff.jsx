import React from 'react'

const BaseCell = (cellData) => {


 if(cellData.data.Baseline.substring(0,1) === "R")
    {
    return (
        <div className="R">
            {cellData.data.Baseline}
        </div>
            )
    }

    if(cellData.data.Baseline.substring(0,1) === "D")
    {
    return (
        <div className="D">
            {cellData.data.Baseline}
        </div>
            )
    }


    return (
        <div>
            {cellData.data.Baseline}
        </div>
            )
    }


export default BaseCell

