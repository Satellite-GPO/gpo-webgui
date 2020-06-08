import React,{useState} from "react";

/**
 * PushButton - кнопка
 *
 * @constructor
 * @param {Object} props - объект с конфигурацией кнопки
 * @param {String} props.buttonText - текст внутри кнопки
 * @param {Function} props.onClick - функция, срабатывающая при нажатии на кнопку
 * @param {Boolean} props.isDisabled - проверка на отключение кнопки
 * @param {String} props.key - ключ
 * @param {String} props.btnCls - класс для стилей кнопки
 **/
const PushButton = props => {
        let buttonText = props.buttonText || '',
            disabled = props.isDisabled || false,
            btnCls = props.btnCls ? `default-pushbutton ${props.btnCls}` : 'default-pushbutton',
            onClick = props.onClick || (()=>{});
        console.log('disabled:', disabled);
        let startPosition=400;
        if(window.innerHeight>400)
                startPosition=window.innerHeight;
        const [style,setStyle]=useState({top:startPosition-50+'px'});
        window.addEventListener=('resize',event => {
                if(style.top!==window.innerHeight-50&&window.innerHeight>400)
                        setStyle({top:window.innerHeight-50+'px'});
                return style
        });
        if(disabled) {
                onClick = ()=>{};
                btnCls = `default-pushbutton-disabled ${btnCls}`;
        }
        return (
                <div className = {btnCls} onClick = {onClick} style={style}>
                    {buttonText}
                </div>
        );
}
export default PushButton;
