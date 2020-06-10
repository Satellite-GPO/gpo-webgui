import React from "react";
import "../../theme/ControlPanel/ControlPanel.css"
import {lang} from '../../lang/lang.js'
import {RequestAPI} from '../../RequestAPI'
import {URL} from '../../Urls'

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionTypes} from "../../ActionTypes";

import TextField from "../TextField";
import PushButton from "../PushButton";
import Graph from "../Graph/Graph";


/**
* ControlPanel - панель управления
*
* @constructor
* @param {Object} props  - объект с конфигурацией панели
* @param {String} props.title  - заголовок панели
* @param {Object} props.store  - динамические данные в панели управления
* */
const ControlPanel = props => {
    const [sendBtnDisabled,setSendBtnDisabled] = React.useState(false);
    const title = props.title || lang.controlPanel.title,
        setGraphVisible = props.setGraphComponentHook;
    return (
        <div id={'controlPanel'} className={'control-panel'} onClick={onTimeRangeChange}>
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
                    type={'date'}
                    key={'fromTimeTextField'}
                    fieldValue={props.store.from}
                    inputCls={'panel-textfield time-range-from'}
                    onChange={props.getTimeRange}
                    fieldName={lang.controlPanel.fields.from}/>
                <TextField
                    type={'date'}
                    key={'toTimeTextField'}
                    fieldValue={props.store.to}
                    inputCls={'panel-textfield time-range-to'}
                    onChange={props.getTimeRange}
                    fieldName={lang.controlPanel.fields.to}/>
                <PushButton
                    buttonText={lang.controlPanel.fields.send}
                    onClick={() => {
                        sendData(props.store, setGraphVisible).then(r => r && setSendBtnDisabled(true))
                        }
                    }
                    key={'pushButtonSend'}
                    isDisabled = {sendBtnDisabled}
                    btnCls={'panel-pushButtonSend'}
                />
            </div>
        </div>

    );
}

/**
* Функция переводит входящую строку в формае Degree Minutes Seconds(DMS)
* @param {String} value - входящая строка
* @returns {String} строка в формате DMS
* */
function setDMSFormat(value = '') {
    if(value === '') {
        return '';
    }
    const degrees = parseInt(value),
        minutes = parseInt((value-parseFloat(degrees))*60),
        seconds = parseFloat((value-parseFloat(degrees)-minutes/60)*3600)

    return `${degrees}°${minutes}'${seconds.toFixed(2)}"`
}

/**
* Асинхронная функция отправки данных панели управления на сервер
* @param {Object} params - объект с данными полей панели управления
* @param {Number} params.lat - ширина
* @param {Number} params.lng - долгота
* @param {String} params.from - нижняя граница периода
* @param {String} params.to - верхняя граница периода
* @param {Function} setGraphVisibleCall - функция-вызов графа
* */
async function sendData(params, setGraphVisibleCall) {
    if(!isFormDataValid(params)){
        alert('Form is not valid!')
        return false;
    }
    const timeRange = {
        from: params.from,
        to: params.to
    }
    let response;

    try{
        await RequestAPI.POST(URL.getSignalData, params).then(r => response = r);
    }catch (e) {
        console.error(e);
        return;
    }

    //  Переводим данные в формат: {День - Значение сигнала}
    response.data = response.data.map((item, index) => {return {day: index+1, y: item}});

    await getResponseData(response, timeRange, setGraphVisibleCall);

    return true;
}
/**
* Асинхронная коллбэк-функция, обрабатывающая ответ от сервера
*
* @callback
* @param {Object} response - объект-ответ от сервера
* @param {Number} response.error_code - код ошибки, в случае успеха = 0
* @param {Array} response.data - массив данных сигнала за указанный период, только если response.error_code === 0
* @param {Object} timeRange - период
* @param {Function} setGraphVisibleCall - функция-вызов графа
* */
async function getResponseData(response, timeRange, setGraphVisibleCall) {
    if(response.error_code !== 0) {
        console.error(response.error_code)
        return;
    }

    setGraphVisibleCall(<Graph data={response.data} timeRange={timeRange} setGraphVisible={(isVisible) => {setGraphVisibleCall(isVisible)}}/>);
}

/**
* Функция срабатывает при изменении периода времени
* @param {Object} e - событие
* */
function onTimeRangeChange(e) {
    const input = e.target,
        value = {};
    input.classList.contains('time-range-from') ? value.from = input.value : value.to = input.value;

    return {
        type: actionTypes.getTimeRange,
        time: value
    }
}

/**
* Функция проверяет правильность отправляемых данных
* @param {Object} data - объект с данными формы
* @param {Number} data.lat - широта
* @param {Number} data.lng - долгота
* @param {String} data.from - нижняя граница периода
* @param {String} data.to - верхняя граница периода
* */
function isFormDataValid(data) {
    return !(!data.lat || !data.lng || !data.from || !data.to || data.from > data.to);
}

/**
* @Redux section
* */
function mapStateToProps(state) {
    return {
        store: {...state.locationData, ...state.getTimeRange}
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getTimeRange: onTimeRangeChange},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
