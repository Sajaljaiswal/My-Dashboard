import React, { useState } from 'react'
import "./feeReceipt.css";
import images from "../../images/feeimg.png"
const NewFeeReceipt = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (<div> <div className='d-flex container2 '>
        <img className='h-50 w-50' src={images} alt="no image" />
        <form className='' onSubmit={(e) => handleSubmit(e)}>
            <h1 className='text-primary'>Enter Details of Fee Receipt</h1> <br />
            <input className='form-control w-75  ' type="text" placeholder=' Enter Your Name' required value={name} onChange={(e) => setname(e.target.value.toUpperCase())} /> <br />
            <input className='form-control w-75  ' type="date" required /> <br />
            <select className='form-control w-75' id="months" name="Months">
                <option selected >--Select Month--</option>
                <option value='1'>Janaury</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select><br />
            <input className='form-control w-75' type="number" placeholder='Amount Paid ' /><br />
            <input className='form-control w-75' type="number" placeholder='Amount Due ' /><br />
            <button className='btn btn-warning w-25'>Reset</button> &nbsp;
            <button className='btn btn-success w-25'>Submit</button>
        </form>
    </div ></div >)
}

export default NewFeeReceipt
