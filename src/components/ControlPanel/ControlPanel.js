import React from "react";
import "../../theme/ControlPanel/ControlPanel.css"
import {lang} from '../../lang/lang.js'

import {connect} from 'react-redux';

import TextField from "../TextField";
import PushButton from "../PushButton";
import { LatLng } from "leaflet";

function setDMSFormat(value = '') {
    if(value === '') {
        return '';
    }
    const degrees = parseInt(value),
        minutes = parseInt((value-parseFloat(degrees))*60),
        seconds = parseFloat((value-parseFloat(degrees)-minutes/60)*3600)
    return `${degrees}°${minutes}'${seconds.toFixed(2)}"`
}
const ControlPanel = (props)=>{
        const title = props.title || lang.controlPanel.title;
        return (
            <div className={'control-panel'}>
                <header className={'panel-header'}>
                    {title}
                </header>
                <div className={'panel-body'}>
                    <TextField
                        type={'text'}
                        key={'latitudeTextField'}
                        inputCls={'panel-textfield'}
                        readOnly={true}
                        fieldName={lang.controlPanel.fields.latitude}
                        fieldValue={setDMSFormat(props.store.lat)}/>
                    <TextField
                        type={'text'}
                        key={'longitudeTextField'}
                        inputCls={'panel-textfield'}
                        readOnly={true}
                        fieldName={lang.controlPanel.fields.longitude}
                        fieldValue={setDMSFormat(props.store.lng)}/>
                     <TextField
                        type={'datetime-local'}
                        key={'fromTimeTextField'}
                        inputCls={'panel-textfield'}
                        readOnly={false}
                        fieldName={lang.controlPanel.fields.from}/>
                     <TextField
                        type={'datetime-local'}
                        key={'toTimeTextField'}
                        inputCls={'panel-textfield'}
                        readOnly={false}
                        fieldName={lang.controlPanel.fields.to}/>
                     <PushButton 
                        buttonText={lang.controlPanel.fields.send}
                        onClick={ ()=>{}}
                        key={'pushbuttonSend'}
                        btnCls={'panel-pushbuttonSend'}
                     />
                </div>
            </div>
        );
}

function mapStateToProps(state) {
    return {
        store: state.locationData
    };
}

export default connect(mapStateToProps)(ControlPanel)