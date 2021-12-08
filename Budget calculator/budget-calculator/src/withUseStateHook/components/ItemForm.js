import React from 'react'
import { MdSend } from 'react-icons/md'
const ItemForm = (props) => {
    const {charge, amount, handleCharge, handleAmount, handleSubmit, edit} = props;
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'>Charge</label>
                    <input
                        type="text"
                        className='form-control'
                        id='charge' name='charge'
                        placeholder='e.g. rent'
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>Amont</label>
                    <input
                        type="number"
                        className='form-control'
                        id='amount' 
                        name='amount'
                        placeholder='e.g. rent'
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type='submit' className='btn'>{edit ? 'edit' : 'submit' }
            <MdSend className='btn-icon' />
            </button>
        </form>
    )
}

export default ItemForm;