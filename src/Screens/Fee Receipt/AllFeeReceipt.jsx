import React, { useEffect, useState , useRef} from "react";
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
  })
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
      <div ref={componentRef} >
      <div className="fee-receipt-border">
        <span className="">Website : https://divya.ndlmindia.com</span>
        <h1 className="text-primary h1">Divya Technical Institute, Mardah</h1> <br />
        

        <span>Mobile : </span> <span> 8382984559</span>     <span>Date : </span> <span> 8382984559</span>
        <br />
        <span>E-mail : </span> <span> jaiswalsajal642@gmail.com</span>    <span>Receipt ID : </span> <span> 8382984559</span>
            <span>Receipt No : </span> <span> 8382984559</span>
      
        <h3>name: {selectedValue}</h3>
        <h3>Signature : ..................</h3>
      </div>
      </div>
      <div>
      <button className="btn btn-warning w-25" onClick={handlePrint}>Print</button>

      </div>
    </>
  );
};

export default AllFeeReceipt;
