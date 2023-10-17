import React from 'react'
import "./customPopup.css"
import { useSelector } from "react-redux";
const updateStudent = ({ myId,  viewPopUp,  setViewPopUp}) => {
  
  const allUsers  = useSelector((state) => state.app.users);
  return (
    <div className='modalBackGround'>
    <div className="mainModal">
      <h1 className='h1'>Update Students Details</h1>
      <button className='btn btn-warning w-25' onClick={()=> setViewPopUp(false)}>CLose</button>
    </div>
  </div>
  )
}

export default updateStudent
