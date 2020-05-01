import React from "react";
/**
 * @PushButton - кнопка
 * buttonText - текст внутри кнопки
 * onClick - функция, срабатывающая при нажатии на кнопку
 * key - ключ
 * btnCls - класс для стилей кнопки
 **/
const PushButton = props =>{
    var buttonText = props.buttonText;
    const onClick = props.onClick,
    btnCls=props.btnCls;
    return (
        <div className='default-pushbutton'>
                <div className = {btnCls} onClick = {onClick()}>
                    {buttonText}
                </div>
        </div>
    );
}
export default PushButton;