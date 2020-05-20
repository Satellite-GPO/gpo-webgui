import React,{useState,useEffect} from "react";
import '../../theme/gis/MapContainer.css'

import MapReact from "./MapReact";

const MapContainer = props => {
    const [style,setStyle] = useState({width: window.innerWidth-20+'px',height: window.innerHeight-20+'px'})
    useEffect(() => {
        setStyle({width: window.innerWidth-450-20+'px',height: window.innerHeight+'px'})
    },[window.innerWidth,window.innerHeight])
    return (
        <div className={'map-container-wrap'}
            style={style}>
                <MapReact key={'gis-map'}/>
        </div>
    );
}
export default MapContainer;