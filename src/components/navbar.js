import React, { Fragment, useState, useContext } from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {


    const [sidebar, toggleSidebar] = useState(false);
    const showSidebar = () => toggleSidebar(!sidebar);

    const linkStyle = {
        color:"white",
        textDecoration:"none",
        fontSize: "18px"
    }

    return (
     <Fragment>
            <div className="topDiv">

                <div class="hamburger">
                <FaIcons.FaBars className="fa-3x mt-1" onClick={showSidebar}/>
                </div>
               
                <div>2020 CA Political Boundries</div>

                <div class="backDiv">
                    Back to Site
                </div>
            

            </div>


            <div className={sidebar ? "sidebar" : "no-sidebar"}>
            <div className="closeDiv"><FaIcons.FaWindowClose className="iconItem" onClick={showSidebar}/></div>
            
            <div class="linkDiv text-start">
                <ul>
                    <li><Link to="/" style={linkStyle}>View Map</Link></li>
                    <li><Link to="/grid" style={linkStyle}>View Grid</Link></li>
                </ul>
            </div>
            <h2>File Downloads</h2>


            <div class="downloadDiv">
            <h3>Assembly Files</h3>
            <ul>
                <li>AD2020.kml</li>
                <li>AD2020.shp</li>
                <li>AD2020.geoJSON</li>
            </ul>

            <h3>Senate Files</h3>
            <ul>
                <li>SD2020.kml</li>
                <li>SD2020.shp</li>
                <li>SD2020.geoJSON</li>
            </ul>

            <h3>Congressional Files</h3>
            <ul>
                <li>CD2020.kml</li>
                <li>CD2020.shp</li>
                <li>CD2020.geoJSON</li>
            </ul>
                
            </div>
            </div >

           
    </Fragment>
  )
}

export default Navbar