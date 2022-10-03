import React from 'react'

const BaseCell = (cellData) => {

    const getClass = () => {

    if(cellData.data.Baseline.substring(0,1) === "R")
        return ("R")

    if(cellData.data.Baseline.substring(0,1) === "D")
        return ("D")
    }

    return (
        <div className={getClass(cellData)}>
            {cellData.data.Baseline}
        </div>
            )
    }


export default BaseCell

