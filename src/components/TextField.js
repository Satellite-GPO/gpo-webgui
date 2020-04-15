import React from "react";

const TextField =(props)=> {
        const fieldName = `${props.fieldName}:` || '',
        fieldValue = props.fieldValue || '',
        inputCls = `default-inputCls ${props.inputCls}` || 'default-inputCls',
        fieldStyle = props.fieldStyle || {},
        readOnly = props.readOnly || false,
        type = props.type || 'text';
   const componentDidUpdate = (prevProps, prevState, snapshot) =>{
        if(prevState.value === props.fieldValue) {
            return;
        }
        fieldValue = props.fieldValue;
    }
        return (
            <div className='default-textfield'>
                <label className='default-textfield-label'>
                    <div className='default-textfield-fieldname'>{fieldName}</div>
                    <input
                        style={fieldStyle}
                        className={inputCls}
                        type={type}
                        value={fieldValue}
                        readOnly={readOnly}/>
                </label>
            </div>
        );
}
export default TextField;