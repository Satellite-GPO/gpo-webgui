import React from "react";


/**
* TextField - базовый компонент ввода
*
* @constructor
* @param {Object} props - объект с конфигурацией компонента
* @param {String} props.fieldName - заголовок(label) поля
* @param {String} props.inputCls - css классы стилей для поля ввода
* @param {String} props.fieldStyle - css классы стилей для обёртки поля ввода //TODO возможно убрать
* @param {Boolean} props.readOnly - доступно ли поле ввода только для чтения
* @param {String} props.type - тип поля ввода
* @param {String/Number} props.fieldValue - значение поля
* @param {Function} props.onChange - функцияя выполняемая при изменении поля
* */
const TextField = props => {
        const fieldName = `${props.fieldName}:` || '',
            inputCls = props.inputCls ? `default-inputCls ${props.inputCls}` : 'default-inputCls',
            fieldStyle = props.fieldStyle || {},
            readOnly = props.readOnly || false,
            type = props.type || 'text',
            fieldValue = props.fieldValue || '',
            onChange = props.onChange || (() => {})();
        return (
                <div className='default-textfield'>
                <label className='default-textfield-label'>
                    <div className='default-textfield-fieldname'>{fieldName}</div>
                    <input
                        style={fieldStyle}
                        className={inputCls}
                        type={type}
                        value={fieldValue}
                        readOnly={readOnly}
                        onChange={onChange}
                        />
                </label>
            </div>
        );
}
export default TextField;
