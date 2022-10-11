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
               
                <div>2022 CA Political Boundries</div>

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
                <li><a href="/downloads/assm.kml" download>AD2020.kml</a></li>
                <li><a href="/downloads/assm.geojson" download>AD2020.geoJSON</a></li>
            </ul>

            <h3>Senate Files</h3>
            <ul>
                <li><a href="/downloads/senate.kml" download>SD2020.kml</a></li>
                <li><a href="/downloads/senate.geojson" download>SD2020.geoJSON</a></li>
            </ul>

            <h3>Congressional Files</h3>
            <ul>
                <li><a href="/downloads/congress.kml" download>CD2020.kml</a></li>
                <li><a href="/downloads/congress.geojson" download>CD2020.geoJSON</a></li>
            </ul>
                
            </div>
            </div >

           
    </Fragment>
  )
}

export default Navbar