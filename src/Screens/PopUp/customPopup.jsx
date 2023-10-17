import React from 'react'
import "./customPopup.css"
import { useSelector } from "react-redux";
const CustomPopup = ({ myId,  viewPopUp,  setViewPopUp}) => {

  const allUsers  = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele)=> ele.id == myId);

  return (
    <div className='modalBackGround'>
      <div className="mainModal">
        <h1 className='h1'>Students Details</h1>
        <h2>NAME :    {singleUser[0].name}</h2>
        <h2>EMAIL :  {singleUser[0].email}</h2>
        <h2>COURSE :  {singleUser[0].course}</h2>
        <h2>MOBILE N0:   {singleUser[0].mobnum}</h2>
        <button className='btn btn-warning w-25' onClick={()=> setViewPopUp(false)}>CLose</button>
      </div>
    </div>
  )
}

export default CustomPopup;
