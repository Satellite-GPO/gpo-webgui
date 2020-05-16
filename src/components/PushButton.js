import React from "react";
/**
 * @PushButton - кнопка
 * buttonText - текст внутри кнопки
 * onClick - функция, срабатывающая при нажатии на кнопку
 * key - ключ
 * btnCls - класс для стилей кнопки
 **/
const PushButton = props => {
        const buttonText = props.buttonText || '',
        onClick = props.onClick || {},
        btnCls = props.btnCls || 'default-pushbutton';
        return (
                <div className = {btnCls} onClick = {onClick()}>
                    {buttonText}
                </div>
        );
}
export default PushButton;