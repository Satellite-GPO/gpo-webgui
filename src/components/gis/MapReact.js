import React from "react";
import '../../theme/gis/Map.css'

import {Map, TileLayer} from 'react-leaflet'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionTypes} from "../../ActionTypes";

class MapReact extends React.Component{
    constructor(props) {
        super(props);
        //Tomsk start position

        this.store = this.props.store || {};

        this.state = {
            ...this.store,
            zoom: 13
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map className={'map'} center={position} zoom={this.state.zoom} onClick={this.props.mapClick}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        );
    }

    static onMapClick(e) {
        const position = e.latlng;

        return {
            type: actionTypes.mapClick,
            position
        }
    }
}

function mapStateToProps(state) {
    return {
        store: state.startLocation
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({mapClick: MapReact.onMapClick},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapReact)