import React from "react";
import '../../theme/gis/MapContainer.css'

import MapReact from "./MapReact";

const MapContainer = (props)=>{
        const style = {
            width: `${window.innerWidth - 470.0}px`
        }
        return (
            <div className={'map-container-wrap'}
                style={style}>
                    <MapReact key={'gis-map'}/>
            </div>
        );
}
export default MapContainer;