import React from "react";
import "../../theme/ControlPanel/ControlPanel.css"
import {lang} from '../../lang/lang.js'

import {connect} from 'react-redux';

import TextField from "../TextField";


function setDMSFormat(value = '') {
    if(value === '') {
        return '';
    }
    const degrees = parseInt(value),
        minutes = parseInt((value-parseFloat(degrees))*60),
        seconds = parseFloat((value-parseFloat(degrees)-minutes/60)*3600)
    return `${degrees}°${minutes}'${seconds.toFixed(2)}"`
}

class ControlPanel extends React.Component{
    constructor(props) {
        super(props);
        this.title = this.props.title || lang.controlPanel.title;

    }

    render() {
        return (
            <div className={'control-panel'}>
                <header className={'panel-header'}>
                    {this.title}
                </header>
                <div className={'panel-body'}>
                    <TextField
                        type={'text'}
                        key={'latitudeTextField'}
                        inputCls={'panel-textfield'}
                        parent={this}
                        readOnly={true}
                        fieldName={lang.controlPanel.fields.latitude}
                        fieldValue={setDMSFormat(this.props.store.lat)}/>
                    <TextField
                        type={'text'}
                        key={'longitudeTextField'}
                        fieldValue={setDMSFormat(this.props.store.lng)}
                        inputCls={'panel-textfield'}
                        readOnly={true}
                        parent={this}
                        fieldName={lang.controlPanel.fields.longitude}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        store: state.locationData
    };
}

export default connect(mapStateToProps)(ControlPanel)