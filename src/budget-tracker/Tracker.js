import React from 'react'
import { MdOutlineAttachMoney } from 'react-icons/md';
import { BsFileSpreadsheetFill } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';


function Tracker() {
    return (
        <div className='container'>
            <div className='budger-title'>Budger Tracker</div>
            <div className='row'>
                <div className='col'>
                    <div className="budget-class">
                        <div className='budget-inner-title'> Budget</div>
                        <div className='budget-icon'><MdOutlineAttachMoney /></div>
                        <div className='budget-money'>$100</div>

                    </div>

                </div>
                <div className='col'>
                    <div className="budget-class">
                        <div className='budget-inner-title'> Expense</div>
                        <div className='budget-icon '><BsFileSpreadsheetFill /></div>
                        <div className='budget-money expense'>$20</div>
                    </div>
                </div>
                <div className='col'>
                    <div className="budget-class">
                        <div className='budget-inner-title'> Balance</div>
                        <div className='budget-icon'><FaBalanceScale /></div>
                        <div className='budget-money'>$80</div>
                    </div>


                </div >
            </div >
        </div >

    )
}

export default Tracker