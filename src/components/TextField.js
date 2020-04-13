import React from "react";

export default class TextField extends React.Component {
    constructor(props) {
        super(props);

        this.fieldName = `${this.props.fieldName}:` || '';
        this.fieldValue = this.props.fieldValue || '';
        this.inputCls = `default-inputCls ${this.props.inputCls}` || 'default-inputCls';
        this.fieldStyle = this.props.fieldStyle || {};
        this.readOnly = this.props.readOnly || false;
        this.parent = this.props.parent || {}
        this.type = this.props.type || 'text'

        this.state = {value: this.fieldValue};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.value === this.props.fieldValue) {
            return;
        }
        this.fieldValue = this.props.fieldValue;
        this.setState({value: this.fieldValue});
    }

    render() {
        return (
            <div className='default-textfield'>
                <label className='default-textfield-label'>
                    <div className='default-textfield-fieldname'>{this.fieldName}</div>
                    <input
                        style={this.fieldStyle}
                        className={this.inputCls}
                        type={this.type}
                        value={this.state.value}
                        readOnly={this.readOnly}/>
                </label>
            </div>
        );
    }

}