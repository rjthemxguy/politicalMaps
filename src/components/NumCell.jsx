import React from 'react'

const NumCell = (cellData) => {

    const regVoters = cellData.data.RegisteredVoters.toLocaleString("en-US")
    console.log(typeof regVoters)
    return (
       <div>
           {regVoters}
    </div>
    )

}

export default NumCell