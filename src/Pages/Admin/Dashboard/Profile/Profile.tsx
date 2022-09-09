import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { ValueContext } from "../../../../Context/Context";

const Profile = () => {
  const data = useContext(ValueContext);
  console.log()
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent text-center">
                <img
                  className="profile_img"
                  src="https://source.unsplash.com/600x300/?student"
                  alt="student dp"
                />
                <h3></h3>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong className="pr-1">Pharmacy Name:</strong> { data && data.hospitalname }
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Address:</strong>{ data && data.Address }
                </p>
                <p className="mb-0">
                  <strong className="pr-1">State:</strong>{ data && data.State }
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>General Information
                </h3>
              </div>
              <div className="card-body pt-0">
                <table className="table table-bordered">
                  <tr>
                    <th style={{ width: "30%" }}>GST No</th>
                    <td width="2%">:</td>
                    <td>{ data && data.Gstno }</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Contact No</th>
                    <td width="2%">:</td>
                    <td>{ data && data.contactno }</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Starting Year</th>
                    <td width="2%">:</td>
                    <td>{ data && data.startingyear }</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Branches</th>
                    <td width="2%">:</td>
                    <td>{ data && data.branches }</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Special In</th>
                    <td width="2%">:</td>
                    <td>{ data && data.specialin }</td>
                  </tr>
                  
                </table>
              </div>
            </div>
            <div style={{ height: "26px" }}></div>
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>Other Information
                </h3>
              </div>
              <div className="card-body pt-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/admin_dashboard">
        <button className="btn btn-info">Back To Dashboard</button>
      </Link>
    </div>
  );
};

export default Profile;
