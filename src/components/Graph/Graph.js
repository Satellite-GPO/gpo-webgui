import React from "react";

import '../../theme/Graph/Graph.css'

import {VictoryChart, VictoryLine} from 'victory'

import PushButton from "../PushButton";
import {lang} from "../../lang/lang";
import Window from "../Window";

const Graph = props => {
    const data = props.data || [],
        timeRange = props.timeRange,
        setGraphVisible = props.setGraphVisible || (() => {})(),
        categories = {x: []};
    const [getDataWin, setGetDataWinVisible] = React.useState(false);
    for(let item of data) {
        categories.x.push(`Day${item.day}`);
    }
    return(
        <div id='graphWrapper' className={'graph-wrapper'}>
            <div id={'graph'} className={'graph'}>
                <VictoryChart
                    height={250}
                padding={{left: 50, bottom: 50, top:50}}
                >
                    <VictoryLine
                        data={data}
                    />
                </VictoryChart>
            </div>
            <div className={'bottom-bar'}>
                <PushButton
                    buttonText={lang.closeBtn}
                    btnCls={'bottom-btn'}
                    onClick={() => {
                            setGraphVisible(false);
                            reload();
                        }
                    }
                />
                <PushButton
                    buttonText={lang.saveBtn}
                    btnCls={'bottom-btn'}
                    onClick={save.bind(this,setGetDataWinVisible, data)}
                />
            </div>
            {getDataWin}
        </div>
    )
}

/**
 * Функция вызывает модальное окно сохранения данных
 * @param {Function} setVisibleHook - хук для отображения модального окна
 * @param {Array} data - данные для скачки в txt
 * */
function save(setVisibleHook, data) {
    setVisibleHook(
        <Window isModal={true}
                title={lang.graphWindow.saveDataWin.title}
                cls = {'get-data-win'}>
            <div>
                <label>
                    <input id='saveAsSvg' type='checkbox' aria-label={'as'}/>
                    {lang.graphWindow.saveDataWin.saveSvg}
                </label>
            </div>
            <div>
                <label>
                    <input id='saveAsText' type='checkbox' aria-label={'as'}/>
                    {lang.graphWindow.saveDataWin.saveData}
                </label>
            </div>
            <div className={'bottom-bar'}>
                <PushButton btnCls={'bottom-bar-btn'}
                            buttonText={lang.saveBtn}
                            onClick={saveBtnClick.bind(this, setVisibleHook, data)}/>
                <PushButton btnCls={'bottom-bar-btn'}
                            buttonText={lang.cancelBtn}
                            onClick={() => setVisibleHook(false)}/>
            </div>
        </Window>
    )
}

/**
 * Функция вызывается при нажатии на кнопку сохранить
 * @param {Function} setVisibleHook - хук для отображения модального окна
 * @param {Array} data - данные для скачки в txt
 * */
function saveBtnClick(setVisibleHook, data) {
    const dom = document,
        hasSaveAsSvgSelected = dom.getElementById('saveAsSvg').checked,
        hasSaveAsTextSelected = dom.getElementById('saveAsText').checked;

    hasSaveAsSvgSelected && saveSvg();
    hasSaveAsTextSelected && saveText(data);

    setVisibleHook(false);
    reload();
}

/**
 * Функция сохраняет данные в формат .svg и скачивает файл
 * */
function saveSvg(e) {
    const dom = document,
        victoryGraph = dom.getElementById('graph').firstChild,
        svgEl = victoryGraph.getElementsByTagName('svg')[0],
        svg = svgEl.outerHTML,
        file = new Blob([svg],{type: 'image/svg+xml'}),
        link = dom.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'SignalGraph.svg';
    dom.body.appendChild(link);

    link.click();
    link.remove();
}

/**
 * Функция сохраняет данные в формат .txt и скачивает файл
 * @param {Array} data - массив данных для вывода
 * */
function saveText(data) {
    const result = data.map((item) => {return `${item.day}: ${item.y}\n`}).toString().replace(/,/g, ""),
        dom = document,
        file = new Blob([result], {type: 'text/plain'}),
        link = dom.createElement('a');

    link.href = URL.createObjectURL(file);
    link.download = 'SignalData.txt';
    dom.body.appendChild(link);

    link.click();
    link.remove();
}

/**
 * Функция перезагружает текущее окно
 * */
function reload() {
    document.location.reload();
}

export default Graph;
