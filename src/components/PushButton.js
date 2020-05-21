import React from "react";

/**
 * PushButton - кнопка
 *
 * @constructor
 * @param {Object} props - объект с конфигурацией кнопки
 * @param {String} props.buttonText - текст внутри кнопки
 * @param {Function} props.onClick - функция, срабатывающая при нажатии на кнопку
 * @param {String} props.key - ключ
 * @param {String} props.btnCls - класс для стилей кнопки
 **/
const PushButton = props => {
        const buttonText = props.buttonText || '',
        onClick = props.onClick || (()=>{}),
        btnCls = `default-pushbutton ${props.btnCls}` || 'default-pushbutton';
        return (
                <div className = {btnCls} onClick = {onClick}>
                    {buttonText}
                </div>
        );
}
export default PushButton;
