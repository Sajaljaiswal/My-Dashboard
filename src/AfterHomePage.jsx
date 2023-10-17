import React from "react";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Screens/Dashboard";
import Users from "./Screens/Users";
import Print from "./Screens/Print";
import Analytics from "./Screens/Analytics";
import Setting from "./Screens/Setting";
import NewStudents from "./Screens/Students/NewStudents";
import AllStudents from "./Screens/Students/AllStudents";
import NewFeeReceipt from "./Screens/Fee Receipt/NewFeeReceipt";
import AllFeeReceipt from "./Screens/Fee Receipt/AllFeeReceipt";
import ReceiptStatement from "./Screens/Fee Receipt/ReceiptStatement";
import NewCertificate from "./Screens/Certificate/NewCertificate";
import NewMarksheet from "./Screens/Certificate/NewMarksheet";
import CertificateList from "./Screens/Certificate/CertificateList";
import UpdateStudent from "./Screens/PopUp/updateStudent";
const AfterHomePage = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/print" element={<Print/>} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="newstudents" element={<NewStudents />} />
            <Route path="/updateStudent/:id" element={<UpdateStudent/>} />
            <Route path="allstudents" element={<AllStudents />} />
            <Route path="newfeereceipt" element={<NewFeeReceipt />} />
            <Route path="allfeereceipt" element={<AllFeeReceipt />} />
            <Route path="receiptstatement" element={<ReceiptStatement />} />
            <Route path="/newcertificate" element={<NewCertificate />} />
            <Route path="/newmarksheet" element={<NewMarksheet />} />
            <Route path="/certificatelist" element={<CertificateList />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default AfterHomePage;
