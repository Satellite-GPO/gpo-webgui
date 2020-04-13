import React from "react";
import '../../theme/gis/MapContainer.css'

import MapReact from "./MapReact";

export default class MapContainer extends React.Component{
    constructor(props) {
        super(props);
        this.style = {
            width: `${window.innerWidth - 470.0}px`
        }
    }

    render() {
        return (
            <div className={'map-container-wrap'}
                style={this.style}>
                    <MapReact key={'gis-map'}/>
            </div>
        );
    }


}