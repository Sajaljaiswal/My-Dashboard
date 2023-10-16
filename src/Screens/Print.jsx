import React, {useRef} from "react";
import { useReactToPrint } from "react-to-print";
const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  
  return (
    <>
     <div ref={componentRef} >
    <span>Sno: 9876543467</span>
      <h1 className="text-primary h1">Divya Computer Institute</h1>
      <h2>CERTIFICATE</h2>
      <div>
        <h4>Name :</h4>
        <h4>Mother's Name :</h4>
        <h4>Father's Name :</h4>
        <h4>Name of Institute :</h4>
        <h4>Roll Number :</h4>

        <div>
          This is to certify that the above mentioned candidate is awarded with
          the Certificate of Course of Computer Concept
        </div>
        <div>
          after the candidate has successfully passed the examination of Course
          on Computer Concepts
        </div>
        <div>conducted by DIVYA COMPUTER INSTITUTE</div>
        <div> Candidate has been awarded with C Grade.</div>
      </div>

      <button className="btn btn-warning w-25" onClick={handlePrint}>Print</button>
      </div>
    </>
  );
};

export default Print;
