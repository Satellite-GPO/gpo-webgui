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
        let startPosition;
        if(window.innerHeight>420)
                startPosition=window.innerHeight-60
        else
                startPosition=360
        const [position,setPosition] = useState({top: startPosition+'px'})
        useEffect(() => {
                if(window.innerHeight>420)
                        setPosition({top: window.innerHeight-60+'px'})
        },[window.innerHeight])
        return (
                <div className = {btnCls} onClick = {onClick()} style={position}>
                    {buttonText}
                </div>
        );
}
export default PushButton;