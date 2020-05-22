import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ItemForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">new title</label>
            <Field name="title" component="input" type="text" />
        </div>
        <div>
            <label htmlFor="detail">new detail</label>
            <Field name="detail" component="input" type="text" />
        </div>
    </form>
}

ItemForm = reduxForm({
    form: 'item-form'
})(ItemForm)

export default ItemForm