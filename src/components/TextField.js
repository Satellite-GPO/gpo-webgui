import React from "react";

const TextField =(props)=> {
        const fieldName = `${props.fieldName}:` || '';
        const fieldValue = props.fieldValue || '';
        const inputCls = `default-inputCls ${props.inputCls}` || 'default-inputCls';
        const fieldStyle = props.fieldStyle || {};
        const readOnly = props.readOnly || false;
        const type = props.type || 'text';
        const state = {value: fieldValue};
   const componentDidUpdate = (prevProps, prevState, snapshot) =>{
        if(prevState.value === props.fieldValue) {
            return;
        }
        fieldValue = props.fieldValue;
        const setState=({value: fieldValue});
    }
        return (
            <div className='default-textfield'>
                <label className='default-textfield-label'>
                    <div className='default-textfield-fieldname'>{fieldName}</div>
                    <input
                        style={fieldStyle}
                        className={inputCls}
                        type={type}
                        value={state.value}
                        readOnly={readOnly}/>
                </label>
            </div>
        );
}
export default TextField;