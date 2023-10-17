import React, { useEffect, useState } from "react";
import "./AllStudent.style.css";
import { useDispatch } from "react-redux";
import { deleteStudents, showStudents } from "../../features/divyaUserSlice";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import CustomPopup from "../PopUp/customPopup";
import { Link } from "react-router-dom";
const AllStudents = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  const [viewPopUp, setViewPopUp] = useState(false);
  const [myId, setMyId] = useState();
   // Pagination
   const itemsPerPage = 8; // Number of items per page
   const [currentPage, setCurrentPage] = useState(0);
  
   // Handle page change
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

   // Get the current slice of users based on the current page
   const offset = currentPage * itemsPerPage;
   const currentUsers = users.slice(offset, offset + itemsPerPage);
 
  useEffect(() => {
    dispatch(showStudents());
  }, []);

  if (loading) {
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <>
    {viewPopUp && <CustomPopup myId={myId} viewPopUp={viewPopUp} setViewPopUp = {setViewPopUp}/> }
      <h1 className="text-primary h2">All Student Details</h1> <br />
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

          {currentUsers  &&
            currentUsers .map((ele) => (
              <tbody key={ele.id}>
                <tr>
                  <th scope="row">{ele.id}</th>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>

                  <td>{ele.course}</td>
                  <td>{ele.mobnum}</td>
                  <a type="button" class="btn btn-outline-primary" onClick={()=>[setMyId(ele.id), setViewPopUp(true)]} >VIEW</a>
                  <Link to={`/updateStudent/${ele.id}`} class="btn btn-outline-success">EDIT</Link>
                  <Link onClick={()=>dispatch(deleteStudents(ele.id))}  class="btn btn-outline-danger">DELETE</Link>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      <ReactPaginate
        pageCount={Math.ceil(users.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </>
  );
};

export default AllStudents;
