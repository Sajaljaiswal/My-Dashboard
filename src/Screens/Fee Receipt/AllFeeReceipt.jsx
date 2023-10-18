import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { showStudents } from "../../features/divyaUserSlice";
import { useSelector } from "react-redux";
import "./feeReceipt.css";
import { useReactToPrint } from "react-to-print";
const AllFeeReceipt = () => {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showStudents());
  }, []);

  // Event handler for dropdown change
  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <h1 className="text-primary">All Student Fee Receipt Details</h1> <br />
      <div>
        <li className="nav-item dropdown me-5">
          <select
            className="stu-list w-75"
            id=""
            name="course"
            value={selectedValue}
            onChange={handleDropdownChange}
          >
            {users &&
              users.map((ele) => (
                <>
                  <option selected key={ele.id} value={ele.value}>
                    {ele.name}
                  </option>
                  <hr className="dropdown-divider" />
                </>
              ))}
          </select>
        </li>
      </div>
      <div ref={componentRef}>
        <div className="fee-receipt-border">
          <div class="container">
            <label>
              <p>
                <span id="webs">website</span>: https://divya.ndlmindia.com
              </p>
            </label>
            <label>
              
              <h1>Divya Technical Institute, Mardah</h1>
            </label>
            <div class="upbox">
              <div class="left">
                <p>
                  <span>Mobile</span>: 9792257501
                </p>
                <p>
                  <span>Email</span>: divjhcomputer2@gmail.com
                </p>
              </div>

              <div class="right">
                <p>
                  <span>Date</span>: 20-Apr- 2017
                </p>
                <p>
                  <span>Receipt ID</span>: 7944
                </p>
                <p>
                  <span>Receipt No.</span>: 13354
                </p>
              </div>
            </div>

            <div class="blue">
              <h2>STUDENT FEE RECEIPT</h2>
            </div>
            <div class="lowbox">
              <div class="pht">
                <img src="/User-Profile-PNG-Image.png" alt="" class="img" />
              </div>
              <div class="name">
                <p>
                  <span>Name</span> : VICKY ANAND
                </p>
                <p>
                  <span>Guardian</span>: PREM PRAKASH
                </p>
                <br />
                <p>
                  <span>Course</span>: ADCA (Advance Diploma in Computer
                  Application)
                </p>
                <br />
                <p>
                  <span>Fee Month</span>: April
                </p>
                <p>
                  <span>Fee paid</span>: 300
                </p>
                <p class="due">
                  <span>Fee due</span>: 20
                </p>
              </div>
            </div>
            <div class="lowwbox">
              <div class="bar">
                <img src="/bar.png" alt="" class="barp" />
              </div>

              <div class="pay">
                <p class="redr">Received Rs. Three Hundred Only</p>
                <p class="sign">
                  Received By.
                  <input type="text" name="" id="sign" placeholder="." />
                </p>
                <p class="red">
                  Student's username & password to check their details online on
                  our website
                </p>
                <label>
                  
                  <p>Student's username: 276748394550</p>
                </label>
                <label>
                  
                  <p>Student's password: 13345</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-warning w-25" onClick={handlePrint}>
          Print
        </button>
      </div>
    </>
  );
};

export default AllFeeReceipt;
