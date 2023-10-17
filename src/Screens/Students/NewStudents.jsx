import React, { useState } from "react";
import img from "../../images/newStudent.jpg";
import { useDispatch } from "react-redux";
import "./AllStudent.style.css";
import { createStudent } from "../../features/divyaUserSlice";
const NewStudents = () => {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();
  const handleInput = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const resetForm = () => {
    document.getElementById("studentForm").reset();
    setUsers({});
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    dispatch(createStudent(users));
    alert("Form Submitted");
    resetForm();
  };

  return (
    <div>
      <div className="d-flex container2">
        <img className="h-50 w-50" src={img} alt="no image" />
        <form
          className="container-form"
          id="studentForm"
          onSubmit={handleSubmitData}
        >
          <h1 className="text-primary h2">New Student Details</h1> <br />
          <input
            className="form-control w-75  "
            type="text"
            placeholder=" Enter Your Name"
            name="name"
            required
            value={users.name}
            onChange={handleInput}
          />
          <br />
          <input
            className="form-control w-75  "
            type="text"
            placeholder=" Guardian Name"
            name="gname"
            value={users.gname}
            onChange={handleInput}
          />
          <br />
          <input
            className="form-control w-75"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
            value={users.email}
            onChange={handleInput}
          />
          <br />
          <input
            className="form-control w-75  "
            type="date"
            name="dob"
            value={users.dob}
            onChange={handleInput}
          />
          <br />
          <input
            className="form-control w-75"
            type="number"
            placeholder="Mobile Number"
            required
            name="mobnum"
            value={users.mobnum}
            onChange={handleInput}
          />
          <br />
          <input
            className="form-control w-75  "
            type="text"
            placeholder=" Education "
            name="education"
            value={users.education}
            onChange={handleInput}
          />
          <br />
          <select
            className="form-control w-75"
            id="cars"
            name="course"
            value={users.course}
            onChange={handleInput}
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
  );
};

export default NewStudents;
