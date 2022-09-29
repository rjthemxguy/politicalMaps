import React from 'react'
import DataGrid, {FilterRow, HeaderFilter, SearchPanel, Column, MasterDetail} from 'devextreme-react/data-grid';
import { cdData } from '../data/cd';
import { assmData } from '../data/assm';
import { sdData } from '../data/sd';
import 'devextreme/dist/css/dx.light.css';
import Detail from './Detail';
import DiffCell from './diffCell';
import BaseCell from './BaseDiff';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useState, useEffect} from 'react';




const OfficeGrid = () => {

   
    const [office, setOffice] = useState(cdData)
    const [title, setTitle] = useState("Congress")

    const handleChange = () => {

       
       setOffice(assmData)
       setTitle("Assembly")
           
            
      };

      const handleChange2 = () => {

       
        setOffice(cdData)
        setTitle("Congress")
            
             
       };

       const handleChange3 = () => {

       
        setOffice(sdData)
        setTitle("Senate")
             
       };

  return (
    <div className="container pt-4" >
      <button onClick={handleChange} type="button" class="btn btn-primary mb-4 me-4">Assembly</button>
      <button onClick={handleChange3} type="button" class="btn btn-primary mb-4 me-4">Senate</button>
      <button onClick={handleChange2} type="button" class="btn btn-primary mb-4 me-4">Congress</button>
     <h1>{title}</h1>
      <DataGrid
        dataSource={office}
        //defaultColumns={columns}
        showBorders={true}
        rowAlternationEnabled={true}
      >
       <FilterRow visible={true}/>
       <HeaderFilter visible={true} />
       
        <Column dataField="District"
        width={100}
        allowFiltering={true}/>
        <Column dataField="Name"
        width={200}
        allowFiltering={true}/>
        
        <Column dataField="Baseline"
        width={100}
        allowFiltering={false}
        cellRender={BaseCell}
        />
         <Column dataField="Party"
        width={100}
        allowFiltering={true}
        cellRender={DiffCell}
        />
         <MasterDetail
          enabled={true}
          component={Detail}
        />
      </DataGrid>
      </div>
  )
}

export default OfficeGrid