import React,{useState,useEffect} from "react";
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
        const [position,setPosition] = useState({top: window.innerHeight-40+'px'})
        useEffect(() => {
                if(window.innerHeight>400)
                {
                        setPosition({top: window.innerHeight-40+'px'})
                }
        })
        return (
                <div className = {btnCls} onClick = {onClick()} style={position}>
                    {buttonText}
                </div>
        );
}
export default PushButton;