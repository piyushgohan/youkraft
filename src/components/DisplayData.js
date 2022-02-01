import React from 'react';
import '../styles/login.css';
import { useSelector } from "react-redux";
import {useState , useEffect} from "react";

function DisplayData() {
    const data = useSelector((state) => state.data);
    const [value , setValue] = useState({});

    useEffect(() => {
        setValue(data);
    },data)

  return (
    <div>
      {value && (
        <div className="form-table">
          <div className="col-container">
            <h2 className="table-head">Name</h2>
            <p className="table-values">{value.name}</p>
          </div>
          <div className="col-container">
            <h2 className="table-head">Age</h2>
            <p className="table-values">{value.age}</p>
          </div>
          <div className="col-container">
            <h2 className="table-head">Email</h2>
            <p className="table-values">{value.email}</p>
          </div>
          <div className="col-container">
            <h2 className="table-head">Phone No.</h2>
            <p className="table-values">{value.phone}</p>
          </div>
          <div className="col-container">
            <h2 className="table-head">Password</h2>
            <p className="table-values">{value.password}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayData;
