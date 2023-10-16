import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showStudents } from "../Screens/../features/divyaUserSlice";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { logout, isLoading } = useAuth0();
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showStudents());
  }, []);

 const totalStudent = users.length;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Password
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    LOGOUT
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
      &nbsp;
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body  text-center">
              <h5 className="card-title">Total Students</h5>
              <p className="card-text">{totalStudent} Students</p>
              <a href="#"  className="btn btn-primary">
                Explore All
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body  text-center">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
