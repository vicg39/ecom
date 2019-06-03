import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return(
            <div className={`${className} form-input`}>
                <label className='form-input-label'>{title}</label> 
                <input className='form-input-input' 
                    type={type} 
                    placeholder={placeholder} 
                    {...input} />
            </div>
        )
    }
}

export default FormInput;