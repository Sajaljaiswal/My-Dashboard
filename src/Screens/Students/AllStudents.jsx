import React, { useEffect, useState } from "react";
import "./AllStudent.style.css";
import { useDispatch } from "react-redux";
import { showStudents } from "../../features/divyaUserSlice";
import { useSelector } from "react-redux";
const AllStudents = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showStudents());
  }, []);

  if (loading) {
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  }
  return (
    <>
      <h1 className="text-primary h1">All Student Details</h1> <br />
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">S no.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Course</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>

          {users &&
            users.map((ele) => (
              <tbody>
                <tr>
                  <th scope="row">{ele.id}</th>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  
                  <td>{ele.course}</td>
                  <td>{ele.mobnum}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};

export default AllStudents;
