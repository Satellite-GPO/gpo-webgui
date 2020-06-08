import React,{useState} from "react";
import '../../theme/gis/MapContainer.css'

import MapReact from "./MapReact";

/**
* MapContainer - обвёртка для компонента {@link=MapReact}
* @constructor
* @params {Object} props - объек с конфигурацией обвёртки
* */
const MapContainer = props => {
    const [style,setStyle]=useState({height: window.innerHeight+'px',width:window.innerWidth-470+'px'});
     window.addEventListener= event => {
         if(style.height!==window.innerHeight)
            setStyle({height: window.innerHeight+'px'})
        if(style.width-470!==window.innerWidth-470)
            setStyle({width: window.innerWidth-470+'px'})
         return style;
     };
    return (
        <div className={'map-container-wrap'}
            style={style}>
                <MapReact key={'gis-map'}/>
        </div>
    );
}
export default MapContainer;
