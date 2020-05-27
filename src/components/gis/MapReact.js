import React from "react";
import '../../theme/gis/Map.css'

import {Map, TileLayer} from 'react-leaflet'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionTypes} from "../../ActionTypes";

/**
* MapReact - карта
* @constructor
* @param {Object} props - объект с конфигурацией карты
* @param {Object} props.store - объект с данными(широта, долгота)
* */
const MapReact = props => {
    const store = props.store || {},
    zoom= 13,
    //Tomsk start position
    position = [store.lat, store.lng];
    return (
        <Map className={'map'} center={position} zoom={zoom} onClick={props.mapClick}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </Map>
    );
}

/**
* Функция заносит в стор координаты, по которым был вызван клик
* @param {Object} e - событие
* */
function onMapClick(e) {
    const position = e.latlng;

    return {
        type: actionTypes.mapClick,
        position
    }
}

/**
* @Redux section
* */
function mapStateToProps(state) {
    return {
        store: state.startLocation
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({mapClick: onMapClick},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapReact)
