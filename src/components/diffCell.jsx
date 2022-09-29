import React from 'react'

const DiffCell = (cellData) => {


 if(cellData.data.Party === "(R)")
    {
    return (
        <div className="R">
            {cellData.data.Party}
        </div>
            )
    }

    if(cellData.data.Party === "(D)")
    {
    return (
        <div className="D">
            {cellData.data.Party}
        </div>
            )
    }

    else {
        return (
            <div>
                {cellData.data.Party}
            </div>
                )
    }
   
    }


export default DiffCell