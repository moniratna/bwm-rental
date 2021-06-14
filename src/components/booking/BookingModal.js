import React from 'react';
import Modal from 'react-responsive-modal';

export default function BookingModal(props) {
    const {open, closeModal} = props;
    return (
        <Modal open={open} onClose={closeModal} little classNames={{ modal: 'booking-modal' }}>
        <h4 className='modal-title title'>Confirm Booking </h4>
        <p className='dates'>--2018/12/15-- / --2018/12/12--</p>
        <div className='modal-body'>
            <em>--45---</em> nights /
            <em>--34---$</em> per Night
            <p>Guests: <em>--54---</em></p>
            <p>Price: <em>--43---$ </em></p>
            <p>Do you confirm your booking for selected days?</p>
        </div>
        <div className='modal-footer'>
            <button type='button' className='btn btn-bwm'>Confirm</button>
            <button type='button' onClick={closeModal} className='btn btn-bwm'>Cancel</button>
        </div>
        </Modal>
    )
}
