import React, { useEffect, useState } from 'react'
import "./updateStudents.css";
import img from "../../images/newStudent.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { updateStudents } from '../../features/divyaUserSlice';
const UpdateStudent = () => {
  const [updatedUser , setUpdatedUser ] = useState();
  const { id } = useParams();
  
  const allUsers  = useSelector((state) => state.app.users);

  useEffect(()=>{
      if(id){
        const singleUser = allUsers.filter((ele)=> ele.id === id);
        setUpdatedUser(singleUser[0])
      }
  },[])

  const newData = (e)=>{
    setUpdatedUser({...updatedUser , [e.target.name] : e.target.value})
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(updateStudents(updatedUser));
    navigate("/allstudents")
  }
  return (


    <div>
      <div className="d-flex container2">
        <img className="h-50 w-50" src={img} alt="no pht" />
        <form
          className="container-form"
          id="studentForm"
          onSubmit={handleUpdate}
        >
          <h1 className="text-primary h2">Update Student Details</h1> <br />
          <input
            className="form-control w-75  "
            type="text"
            placeholder=" Enter Your Name"
            name="name"
            value={updatedUser && updatedUser.name}
            onChange={newData}
          />
          <br />
          <input
            className="form-control w-75  "
            type="text"
            placeholder=" Guardian Name"
            name="gname"
            value={updatedUser && updatedUser.gname}
            onChange={newData}
          />
          <br />
          <input
            className="form-control w-75"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
            value={updatedUser && updatedUser.email}

            onChange={newData}
          />
          <br />
        
          <input
            className="form-control w-75"
            type="number"
            placeholder="Mobile Number"
            required
            name="mobnum"
            value={updatedUser && updatedUser.mobnum}
            
            onChange={newData}
          />
          <br />
          <input
            className="form-control w-75  "
            type="text"
            placeholder=" Education "
            name="education"
            value={updatedUser && updatedUser.education}
            
            onChange={newData}
          />
          <br />
          <select
            className="form-control w-75"
            id="cars"
            name="course"
            value={updatedUser && updatedUser.course}
            
            onChange={newData}
          >
            <option selected>--Select Course--</option>
            <option value="DCA">DCA</option>
            <option value="CCC">CCC</option>
            <option value="ADCA">ADCA</option>
            <option value="Tally">Tally</option>
            <option value="Basic Computer">Basic Computer</option>
          </select>
          <br />
          <input
            className="form-control w-75"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <br />
          <button className="btn btn-warning w-25">Reset</button> &nbsp;
          <button className="btn btn-success w-25" onClick={() => {}}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent;
