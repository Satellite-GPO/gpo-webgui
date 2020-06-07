import React from "react";
import ReactDOM from 'react-dom';
import '../../theme/Graph/Graph.css'

import {VictoryChart, VictoryLine} from 'victory'

import PushButton from "../PushButton";

const Graph = props => {
    const data = props.data || [],
        timeRange = props.timeRange,
        categories = {x: []},
        saveWin = props.saveWin;
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
                    buttonText={'Отмена'}
                    btnCls={'bottom-btn'}
                    onClick={cancelBtn}
                />
                <PushButton
                    buttonText={'Сохранить'}
                    btnCls={'bottom-btn'}
                    onClick={save(saveWin)}
                />
            </div>
        </div>
    )
}

function save(component) {
    console.log(document.getElementById('graphWrapper'))
}

function saveSvg(e) {
    const dom = document,
        victoryGraph = dom.getElementById('graph').firstChild,
        svgEl = victoryGraph.getElementsByTagName('svg')[0],
        svg = svgEl.outerHTML,
        file = new Blob([svg],{type: 'image/svg+xml'}),
        url = URL.createObjectURL(file),
        link = dom.createElement('a');
    link.href = url;
    link.download = 'SignalGraph.svg'
    dom.body.appendChild(link);

    link.click();
    link.remove();
}

function cancelBtn(e) {
    const dom = document,
        graphEl = dom.getElementById('graphWrapper');

    graphEl.remove();
}

export default Graph;
